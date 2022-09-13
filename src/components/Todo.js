import React, {useState} from "react";
import styled from 'styled-components';

export default function Todo({title, state, id, changeTitle, onDelete, changeState}) {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(title);
	const [currentState, setState] = useState(state);

	
	const Btn = styled.button({
		border: '1px solid #000',
		background: 'none',
		padding: '10px 20px',
		marginRight: '10px'
	});
	
	const Btn2 = styled.button({
		border: '1px solid #000',
		background: 'none',
		padding: '10px 20px',
		marginRight: '10px'
	});
	
	console.log(Btn2);

	const Content = styled.span({
		marginRight: '10px'
	});
	
	const ItemList = styled.li`
		display: block;
		margin-bottom: 5px;
		padding: 5px 0;
		border-top: 1px solid #000;
		&:last-of-type {
			border-bottom: 1px solid #000;
		}
	`;

	const Input = styled.input({
		marginRight: '10px'
	});

	const Select = styled.select({
		marginRight: '10px'
	});

	const EditBox = styled.div`
	`;

	const editComplete = () => {
		changeTitle(id,value);
		changeState(id,currentState);
		setEditing(false);
	}

	const switchEdit = () => {
		setEditing(true);
	}


	const editingUi = (
		<EditBox>
			<Input
				type='text'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<Select value={currentState} onChange={(e) => setState(e.target.value)}>
				<option value='complete'>complete</option>
				<option value='incomplete'>incomplete</option>
			</Select>
			<Btn onClick={editComplete}>change</Btn>
		</EditBox>
	);

	const displayUi = (
		<div>
			<Content>title: {title}<em>state: {state}</em></Content>
			<Btn onClick={switchEdit}>edit</Btn>
			<Btn onClick={() => onDelete(id)}>delete</Btn>
		</div>
	)

	return (
		<ItemList id={id}>
			{editing ? editingUi : displayUi}
		</ItemList>
	);
}