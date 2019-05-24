import React from 'react'
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import destinations from '../apis/destinations';
import ReactDOM from 'react-dom'

export default function UserBio({ user, userID }) {
	const [skills, setSkills] = useState([])
	const [workExperience, setWorkExperience] = useState([])
	let myEl = useRef(null);
	async function makeDivBigger() {
		myEl.current.style.height = '500px';


		try {
			const response = await destinations.get(`/api/destinations/${userID}`);
			console.log(response.data.workExperience)
			setSkills(response.data.skills)
			setWorkExperience(response.data.workExperience)
		} catch (error) {
			console.log(error)

		}
	}
	function makeDivSmaller() {
		setSkills(null)
		setWorkExperience(null)
		myEl.current.style.height = '400px';
		
	}
	// useEffect(() => {
	// 	myEl.current.onMouseOver=()=>{
	// 		return myEl.current.style.height='600px'
	// 	}
	// }, [])
	return (
		<div className="Bio" ref={myEl} onMouseOver={makeDivBigger} onMouseOut={makeDivSmaller} onMouseOutCapture={makeDivSmaller} onMouseLeave={makeDivSmaller}>
			<div className="BioItems">
				<h2>{user.name}{" " + user.lastName}</h2>
				<p>{user.country}</p>
				<div className="imageDiv" onMouseOut={makeDivSmaller}>
					<img src={user.profilePicture} className="profPic" alt='you know what this is...'/>
				</div>
				<p>{user.dateOfBirth}</p>
				<p>{user.profession}</p>
				<Link to={`workers/${user._id}`} className="LearnMore">Learn More</Link>
				{/* <p>{location.workExperience.map(el=>el+" ")}</p>
			<p>{location.skills.map(el=>el+' ')}</p> */}
				<div className="skilAndWork">
					<p>{skills}</p>
					<p>{workExperience}</p>
				</div>
			</div>
		</div>
	)
}
