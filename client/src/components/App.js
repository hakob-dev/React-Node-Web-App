import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import User from './User';
import Loader from './Loader';
import destinations from '../apis/destinations';

function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async (name,profession) => {
		setIsLoading(true);
		try {
			const response = await destinations.get('/api/destinations', {
				params: {
					name: name,
					profession:profession,
				},
			});
			setUsers(response.data);
			setIsLoading(false);
		} catch (error) {
			setError('We are sorry! Something went wrong!');
			setIsLoading(false);
		}
	};
	useEffect(() => {
		handleSearch();
	}, []);

	const renderImage = () => {
		if (isLoading) return <Loader />;
		if (error) return <div className='error'>{error}</div>;

		return (
			<div>
				{users.map(user => (
					<User key={user._id} user={user} />
				))}
			</div>
		);
	};

	return (
		<div className='App'>
			<h1 className="srcEmpl">Search for Employees</h1>
			<SearchBar handleSearch={handleSearch} />
			<div>{renderImage()}</div>
		</div>
	);
}

export default App;
