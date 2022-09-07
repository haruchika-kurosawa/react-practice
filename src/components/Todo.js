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

	const Content = styled.span({
		marginRight: '10px'
	});
	
	const ItemList = styled.li({
		display: 'block',
		marginBottom: '5px'
	});

	const editComplete = () => {
		changeTitle(id,value);
		changeState(id,currentState);
		setEditing(false);
	}

	const switchEdit = () => {
		setEditing(true);
	}


	const editingUi = (
		<div>
			<input
				type='text'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<select value={currentState} onChange={(e) => setState(e.target.value)}>
				<option value='complete'>complete</option>
				<option value='incomplete'>incomplete</option>
			</select>
			<Btn onClick={editComplete}>change</Btn>
		</div>
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