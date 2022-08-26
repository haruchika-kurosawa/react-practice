import React from "react";

export default function Todo({title, state, id, onDelete}) {
	return (
		<li id='{id}'>
			<div>
				<span>title: {title}</span><em>state: {state}</em>
				<button onClick={() => onDelete(id)}>delete</button>
			</div>
		</li>
	);
}