import React from "react";
import Todo from './Todo';
import styled from 'styled-components';


export default function TodoList({todoList = [], onDelete, changeTitle, changeState}) {

	const List = styled.ul({
		width: '500px',
		margin: '0 auto'
	});

	return (
		<List>
			{
			todoList.map((item) => (
				<Todo {...item} onDelete={onDelete} changeTitle={changeTitle} changeState={changeState}/>
			))
			}
		</List>
	);
}