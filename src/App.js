import "./App.css";
import React, { useState, useEffect, createContext, useMemo } from "react";
import User from "./components/User";
import GenderFilter from "./components/GenderFilter";
import Button from '@mui/material/Button';
import Slider from './components/Slider';
import CountUp from 'react-countup';
import HamburgerMenu from 'react-hamburger-menu';

// style componentを使う
import styled, { createGlobalStyle } from "styled-components";
// reset.css（box-sizingがなぜかないので下のGlobalStyleで設定する）
import reset from "styled-reset";
// 下で読み込むの忘れないようにする
const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

const Inner = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const LoadBtn = styled.button`
	border: 1px solid #000;
	text-align: center;
	display: block;
	padding: 10px;
	margin: 10px auto 10px;
	width: 100px;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		opacity: 0.5;
	}
`;


export const TestContext = createContext();

function App() {
	const [userList, setUserList] = useState([]);
	const [genderFilter, setGenderFilter] = useState("ALL");
	const [getUserNum, setUserNum] = useState(20);
	const [fetchUrl, setfetchUrl] = useState("https://randomuser.me/api/?results=");
	const [hamburgerState, setHamburgerState] = useState({open: false});


	const changeRating = (username, newRate) => {
		const changedList = userList.map(user => {
			if (user.login.username === username) {
				return {...user, rating: newRate};
			} else {
				return user;
			}
		});
		setUserList(changedList);
	};
	
	const sendData = 'context text';
	const useMemoTest = useMemo(() => ['aaa', 'bbb', 'ccc']);

	useEffect(() => {
		console.log('useMemoTest');
	}, [useMemoTest]);

	
	const filteredList = userList.filter((user) => {
		if (genderFilter === "ALL") return user;
		if (genderFilter === user.gender) return user;
	});

	const loadData = () => {
		(
			async () => {
				const res = await fetch(fetchUrl+getUserNum)
				const data = await res.json();

				const addedRating = data.results.map(user => {
					return {rating: 0, ...user};
				});
				setUserList(addedRating);
			}
		)();
	};

	useEffect(loadData, []);

	function handleHamburgerClick() {
		setHamburgerState({
			open: !hamburgerState.open
		});
	}

	return (
		<TestContext.Provider value={{sendData}}>
			<GlobalStyle />
			<Inner>
			<HamburgerMenu
    isOpen={hamburgerState.open}
    menuClicked={handleHamburgerClick}
    width={18}
    height={15}
    strokeWidth={1}
    rotate={0}
    color='black'
    borderRadius={0}
    animationDuration={0.5}
/>
				<Button variant="contained">Hello World</Button>
				<Slider></Slider>
				<CountUp duration={5} end={100} />
				<LoadBtn onClick={() => loadData()}>Load</LoadBtn>
				<GenderFilter
					value={genderFilter}
					onClick={(select) => {
						setGenderFilter(select);
					}}
				/>
				<ul className="App">
					{filteredList.map((user, i) => (
						<User key={i} user={user} changeRating={changeRating}></User>
					))}
				</ul>
			</Inner>
		</TestContext.Provider>
	);
}

export default App;
