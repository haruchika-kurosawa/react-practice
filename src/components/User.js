import React, { useState } from "react";
import styled from "styled-components";

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
`;

const RateData = ({
	user,
	rate,
	isEditing,
	setEditing,
	setRate,
	changeRating,
}) => {
	if (isEditing) {
		return (
			<>
				<input
					value={rate}
					onChange={(e) => {
						setRate(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						changeRating(user.login.username, rate);
						setEditing(false);
					}}
				>
					change
				</button>
			</>
		);
	} else {
		return (
			<>
				<span>{user.rating}</span>
				<button
					onClick={() => {
						setEditing(true);
					}}
				>
					edit
				</button>
			</>
		);
	}
};

export default function User(prop) {
	const { user, changeRating } = prop;
	const [rate, setRate] = useState(user.rating);
	const [isEditing, setEditing] = useState(false);

	return (
		<Box>
			<Data className="gender">
				<dt>gender: </dt>
				<dd>{user.gender}</dd>
			</Data>
			<Data className="name">
				<dt>name: </dt>
				<dd>
					{user.name.title} {user.name.last} {user.name.first}
				</dd>
			</Data>
			<Data className="rating">
				<dt>rate: </dt>
				<dd>
					<RateData
						user={user}
						rate={rate}
						isEditing={isEditing}
						setRate={setRate}
						setEditing={setEditing}
						changeRating={changeRating}
					/>
				</dd>
			</Data>
		</Box>
	);
}
