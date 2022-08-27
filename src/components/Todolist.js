import React from "react";
import Todo from './Todo';

export default function Todo({todoList, onDelete}) {
	return (
		{
			todoList.map((item) => (
			<Todo {...item} onDelete={onDelete}/>
		  ))
		}
	);
}