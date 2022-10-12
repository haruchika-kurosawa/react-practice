import React from "react";
import {useInput} from '../hooks/useInput';

export default function Input01() {
	const [inputProps, resetInput] = useInput();
	return (
		<>
			<input 
				{...inputProps}
			/>
		</>
	);
}