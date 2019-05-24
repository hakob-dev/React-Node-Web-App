const express = require('express');
const router = new express.Router();

const Destination = require('../db/models/Destination');

router.post('/', async (req, res) => {
	const destination = new Destination(req.body);
    
	// if (!req.body.city) return res.status(400).json({ message: 'City is required!' });
	// if (!req.body.country) return res.status(400).json({ message: 'Country is required!' });
	// if (!req.body.continent) return res.status(400).json({ message: 'Continent is required!' });
	// if (!req.body.image) return res.status(400).json({ message: 'Image is required!' });
console.log(destination)
	try {
		await destination.save();
		res.status(201).json(destination);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/', async (req, res) => {
	try {
		let destinations = await Destination.find()
		if (req.query.name || req.query.profession) {
			destinations = destinations.filter(destination =>
				destination.name.toLowerCase().includes(req.query.name.toLowerCase()),
			);
			if(req.query.profession){
				destinations = destinations.filter(destination =>
					destination.profession.toLowerCase().includes(req.query.profession.toLowerCase()),
				);
			}
		}
		res.json(destinations);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const destination = await Destination.findById(req.params.id);
		if (!destination) return res.status(404).json({ message: 'Destination not found' });
		res.json(destination);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.patch('/:id', async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['city', 'country', 'profilePicture', 'image'];
	const isValidOperation = updates.every(update => allowedUpdates.includes(update));

	if (!isValidOperation) return res.status(400).json({ message: 'Invalid updates!' });

	try {
		const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!destination) return res.status(404).json({ message: 'Destination not found!' });

		res.json(destination);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const destination = await Destination.findByIdAndDelete(req.params.id);

		if (!destination) res.status(404).json({ message: 'Destination not found' });

		res.json(destination);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

module.exports = router;
