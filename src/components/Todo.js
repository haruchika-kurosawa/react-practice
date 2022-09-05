import React, {useState} from "react";

export default function Todo({title, state, id, changeTitle, onDelete}) {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(title);

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
			<button onClick={editComplete}>change</button>
		</div>
	);

	const displayUi = (
		<div>
			<span>title: {title}</span><em>state: {state}</em>
			<button onClick={switchEdit}>edit</button>
			<button onClick={() => onDelete(id)}>delete</button>
		</div>
	)

	return (
		<li id={id}>
			{editing ? editingUi : displayUi}
		</li>
	);
}