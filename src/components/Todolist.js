import React from "react";
import Todo from './Todo';

export default function TodoList({todoList = [], onDelete, changeTitle}) {
	return (
		<>
			{
			todoList.map((item) => (
				<Todo {...item} onDelete={onDelete} changeTitle={changeTitle}/>
			))
			}
		</>
	);
}