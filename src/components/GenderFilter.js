import React, { useState } from "react";
import styled from 'styled-components';

const Box = styled.div`
	border: 1px solid #000;
	margin-bottom: 10px;
	padding: 10px;
	display: flex;
	justify-content: center;
`;

const Btn = styled.button`
	border: 1px solid #000;
	text-align: center;
	display: block;
	padding: 10px;
	margin: 0 10px;
	width: 100px;
cursor: pointer;
transition: 0.5s;
	&:hover {
		opacity: 0.5;
	}
`;

// スタイルを継承
const BtnOn = styled(Btn)`
	background: #000;
	color: #fff;
`;

export default function GenderFilter({value, onClick = () => {}}) {

	function Btns() {
		let buttons = [];
		if (value === 'ALL') {
			buttons.push(<BtnOn onClick={(e) => onClick('ALL')} value="ALL">ALL</BtnOn>);
		} else {
			buttons.push(<Btn onClick={(e) => onClick('ALL')} value="ALL">ALL</Btn>);
		}

		if (value === 'male') {
			buttons.push(<BtnOn onClick={(e) => onClick('male')} value="male">male</BtnOn>);
		} else {
			buttons.push(<Btn onClick={(e) => onClick('male')} value="male">male</Btn>);
		}

		if (value === 'female') {
			buttons.push(<BtnOn onClick={(e) => onClick('female')} value="female">female</BtnOn>);
		} else {
			buttons.push(<Btn onClick={(e) => onClick('female')} value="female">female</Btn>);
		}

		return buttons;
	}

	return (
		<>
			<Box>
				<Btns/>
			</Box>
		</>
	);
}