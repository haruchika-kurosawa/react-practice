import React from "react";
import {useInput} from '../hooks/useInput';

export default function Input01() {
	const [inputProps, resetInput] = useInput('initial');
	return (
		<>
			<input 
				{...inputProps}
			/>
			<button 
				onClick={resetInput}
			>reset</button>
		</>
	);
}