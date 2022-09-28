import "./App.css";
import React, { useState, useEffect } from "react";

const url = "https://randomuser.me/api/?results=20";

function App() {

  const [userList, setUserList] = useState([]);

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
			<ul className="App">
        {userList.map((user, i) => (
          <li key={i} className="user">
            <dl className="gender">
              <dt>gender</dt>
              <dd>{user.gender}</dd>
            </dl>
            <dl className="name">
              <dt>name</dt>
              <dd>{user.name.title} {user.name.last} {user.name.first}</dd>
            </dl>
          </li>
        ))}
      </ul>
		</React.Fragment>
	);
}

export default App;
