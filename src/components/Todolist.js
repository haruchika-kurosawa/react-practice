import React from "react";
import Todo from './Todo';

export default function TodoList({todoList = [], onDelete, changeTitle, changeState}) {
	return (
		<>
			{
			todoList.map((item) => (
				<Todo {...item} onDelete={onDelete} changeTitle={changeTitle} changeState={changeState}/>
			))
			}
		</>
	);
}