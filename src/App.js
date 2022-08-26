import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';

const data = [
  {
    id : '001',
    title : 'test01',
    state : 'complete',
  },
  {
    id : '002',
    title : 'test02',
    state : 'incomplete',
  },
];


function App() {
  const [todoList, setTodoList] = useState(data);
  
  function getTodoList() {
    const gotList = todoList.map((item) => (
        <Todo {...item} onDelete={
          (id) => {
            const deletedData = todoList.filter((todo) => {
              return todo.id !== id;
            });
            setTodoList(deletedData);
          }
        }/>
      ));
  
      return gotList;
  }
  return (
    <div className="App">
      <ul className='todoList'>{
      getTodoList()
      }</ul>
    </div>
  );
}

export default App;
