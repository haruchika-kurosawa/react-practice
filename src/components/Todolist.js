import React from "react";
import Todo from './Todo';
import styled from 'styled-components';


const List = styled.ul({
	width: '500px',
	margin: '0 auto'
});

export default function TodoList({todoList = [], onDelete, changeTitle, changeState}) {


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