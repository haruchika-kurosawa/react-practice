import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useInput} from '../hook';
	
const FormWrap = styled.div`
margin-top: 15px;
`;

const Input = styled.input({
marginRight: '10px'
});
const Btn = styled.button({
border: '1px solid #000',
background: 'none',
padding: '10px 20px',
marginRight: '10px'
});

export default function AddForm({onNewTodo}) {
	const [titleProp, resetTitle] = useInput('');
	const submit = e => {
		e.preventDefault();
		onNewTodo(titleProp.value);
		resetTitle();
	};

	return (
		<FormWrap>
			<form onSubmit={submit}>
				<Input
					value={titleProp.value}
					onChange={titleProp.onChange}
					type="text"
				/>
				<Btn>ADD</Btn>
			</form>
		</FormWrap>
	)
}