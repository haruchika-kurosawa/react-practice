import React from 'react';
import styled from 'styled-components';
import {useInput} from '../hook';

export default function AddForm({onNewTodo}) {
	const [titleProp, resetTitle] = useInput('');
	const submit = e => {
		e.preventDefault();
		onNewTodo(titleProp.value);
		resetTitle();
	};
	const FormWrap = styled.div`
		margin-top: 15px;
	`;
	
	return (
		<FormWrap>
			<form onSubmit={submit}>
				<input
					value={titleProp.value}
					onChange={titleProp.onChange}
					type="text"
				/>
				<button>ADD</button>
			</form>
		</FormWrap>
	)
}