import React from 'react';
import {useInput} from '../hook';

export default function AddForm({onNewTodo, onCountUp}) {
	const [titleProp, resetTitle] = useInput('');
	const submit = e => {
		e.preventDefault();
		onNewTodo(titleProp.value);
		resetTitle();
	};
	const submitCountUp = e => {
		e.preventDefault();
		onCountUp();
	};
	return (
		<div>
		<form onSubmit={submitCountUp}>
			<button>countUp</button>
		</form>
		<form onSubmit={submit}>
			<input
				value={titleProp.value}
				onChange={titleProp.onChange}
				type="text"
			/>
			<button>ADD</button>
		</form>
		</div>
	)
}