import "./App.css";
import React, { useState, useEffect, useContext, createContext } from "react";
import User from "./components/User";
import GenderFilter from "./components/GenderFilter";

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

const sendData = 'context text';

export const TestContext = createContext();

function App() {
	const [userList, setUserList] = useState([]);
	const [genderFilter, setGenderFilter] = useState("ALL");
	const [getUserNum, setUserNum] = useState(20);
	const [fetchUrl, setfetchUrl] = useState("https://randomuser.me/api/?results=");

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

	const filteredList = userList.filter((user) => {
		if (genderFilter === "ALL") return user;
		if (genderFilter === user.gender) return user;
	});

	const loadData = () => {
		fetch(fetchUrl+getUserNum)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const addedRating = data.results.map(user => {
					return {rating: 0, ...user};
				});
				setUserList(addedRating);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(loadData, []);



	return (
		<TestContext.Provider value={{sendData}}>
			<GlobalStyle />
			<Inner>
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
