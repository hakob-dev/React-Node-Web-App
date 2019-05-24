const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		lastName:{
			type: String,
			required: true,
			trim: true,
		},
		dateOfBirth: {
			type: String,
			required: true,
			trim: true,
		},
		profession: {
			type: String,
			required: true,
			trim: true,
		},
		profilePicture: {
			type: String,
			required: true,
			trim: true,
		},
		description:{
			type: String,
			required: true,
			trim: true,
		},
		country: {
			type: String,
			required: true,
			trim: true,
		},
		workExperience: {
			type: String,
			required: true,
			trim: true,
		},
		skills: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
