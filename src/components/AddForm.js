import React from 'react';
import {useInput} from '../hook';

export default function AddForm({onNewTodo}) {
	const [titleProp, resetTitle] = useInput('');
	const submit = e => {
		e.preventDefault();
		onNewTodo(titleProp.value);
		resetTitle();
	};
	return (
		<form onSubmit={submit}>
			<input
				value={titleProp.value}
				onChange={titleProp.onChange}
				type="text"
			/>
			<button>ADD</button>
		</form>
	)
}