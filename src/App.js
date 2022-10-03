import "./App.css";
import React, { useState, useEffect } from "react";
import User from "./components/User";
import GenderFilter from "./components/GenderFilter";

// style componentを使う
import styled, { createGlobalStyle } from 'styled-components';
// reset.css（box-sizingがなぜかないので下のGlobalStyleで設定する）
import reset from 'styled-reset';
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

const url = "https://randomuser.me/api/?results=20";

function App() {

  const [userList, setUserList] = useState([]);
  const [genderFilter, setGenderFilter] = useState('ALL');

  const filteredList = userList.filter( user => {
    if (genderFilter === 'ALL') return user;
    if (genderFilter === user.gender) return user;

  });

  useEffect(() => {
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUserList(data.results);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

	return (
		<React.Fragment>
      <GlobalStyle />
      <Inner>
      <GenderFilter value={genderFilter} onClick={(select) => {
        setGenderFilter(select);
      }}/>
      <ul className="App">
        {filteredList.map((user, i) => (
          <User key={i} user={user}></User>
        ))}
      </ul>
      </Inner>
		</React.Fragment>
	);
}

export default App;
