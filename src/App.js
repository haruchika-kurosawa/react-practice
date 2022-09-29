import "./App.css";
import React, { useState, useEffect } from "react";
import User from "./components/User";

// style componentを使う
import { createGlobalStyle } from 'styled-components';
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

const url = "https://randomuser.me/api/?results=20";

function App() {

  const [userList, setUserList] = useState([]);
  const [genderFilter, setGenderFilter] = useState('ALL');

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
			<ul className="App">
        {userList.map((user, i) => (
          <User key={i} user={user}></User>
        ))}
      </ul>
		</React.Fragment>
	);
}

export default App;
