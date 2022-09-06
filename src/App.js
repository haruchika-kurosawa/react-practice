import './App.css';
import Todolist from './components/Todolist';
import AddForm from './components/AddForm';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React, { useState , createContext } from 'react';
import { v4 } from 'uuid';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const data = [
  {
    id : v4(),
    title : 'test01',
    state : 'complete',
  },
  {
    id : v4(),
    title : 'test02',
    state : 'incomplete',
  },
];

function App() {
  
  const [todoList, setTodoList] = useState(data);
  const onNewTodo = title => {
    const newTodoList = [
      ...todoList,
      {
        id: v4(),
        title: title,
        state: 'incomplete',
      }
    ];
    setTodoList(newTodoList);
  }

  function todoDelete(id) {
    const deletedData = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(deletedData);
  }

  const changeTitle = (id,title) => {
    const changedList = todoList.map((todo) => {
      if (id === todo.id) {
        return {...todo, title};
      } else {
        return todo;
      }
    });
    setTodoList(changedList);
  }
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Todolist
        todoList={todoList}
        onDelete={todoDelete}
        changeTitle={changeTitle}
        />
        <AddForm
          onNewTodo={onNewTodo}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
