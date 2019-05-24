import React, { useState } from 'react';

export default function SearchBar({ handleSearch }) {
	const [value, setValue] = useState('');
	const [value2, setValue2] = useState('');
	const handleChange = event => setValue(event.target.value);
	const handleChange2 = event => setValue2(event.target.value);
	const handleSubmit = event => {
		event.preventDefault();
		handleSearch(value,value2);
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Search by Name' value={value} onChange={handleChange} />
			<input type='text' placeholder='Search by profession' value={value2} onChange={handleChange2} />
			<input type='submit' value='Search' />
		</form>
	);
}
