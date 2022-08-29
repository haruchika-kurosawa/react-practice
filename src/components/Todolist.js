import React from "react";
import Todo from './Todo';

export default function TodoList({todoList = [], onDelete}) {
	return (
		<>
			{
			todoList.map((item) => (
				<Todo {...item} onDelete={onDelete}/>
			))
			}
		</>
	);
}