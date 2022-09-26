import React from "react";
import styled from 'styled-components';

export default function Filter(props) {

	const { onChange } = props;

	const handleChange = key => {
		onChange(key);
	}
	
	return (
		<>
		<button
		onClick={() => handleChange('ALL')}
		>ALL</button>
		<button
		onClick={() => handleChange('Incomplete')}
		>Incomplete</button>
		<button
		onClick={() => handleChange('Complete')}
		>Complete</button>
		</>
	);
}