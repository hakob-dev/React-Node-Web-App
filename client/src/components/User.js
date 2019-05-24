import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../apis/destinations';
import UserBio from './UserBio';
export default function User({ user }) {
	console.log(user)
	const [moreData, setMoreData] = useState([])
	
	return (
		<UserBio user={user} userID={user._id}/>
	);
}
