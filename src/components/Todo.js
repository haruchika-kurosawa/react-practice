import React, {useState} from "react";
import styled from 'styled-components';

export default function Todo({title, state, id, changeTitle, onDelete}) {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(title);

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