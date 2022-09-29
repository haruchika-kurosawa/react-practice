import React from "react";
import styled from 'styled-components'

const Box = styled.li`
	border: 1px solid #000;
	padding: 10px;
	margin-bottom: 10px;

	dt {
		font-size: 1.8rem;
		font-weight: 700;
	}
`;

const Data = styled.dl`
	display: flex;

	& + & {
		margin-top: 5px;
	}
`

export default function User(prop) {
	const {user} = prop;
	return (
	<Box>
		<Data className="gender">
		  <dt>gender: </dt>
		  <dd>{user.gender}</dd>
		</Data>
		<Data className="name">
		  <dt>name: </dt>
		  <dd>{user.name.title} {user.name.last} {user.name.first}</dd>
		</Data>
	</Box>
	);
}