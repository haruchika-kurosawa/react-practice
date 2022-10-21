import React, {useReducer} from "react";

export default function Input02() {
	const [checked, setChecked] = useReducer(checked => !checked, false);
	return (
		<>
			{checked ? 'checked' : 'not checked'}
			<button 
				onClick={setChecked}
			>check</button>
		</>
	);
}