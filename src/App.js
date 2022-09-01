import './App.css';
import Todolist from './components/Todolist';
import AddForm from './components/AddForm';
import React, { useState ,useContext, createContext, useEffect } from 'react';
import { v4 } from 'uuid';

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

const testData = [
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

export const testContext = createContext();

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
  
  console.log('not use useEffect');
  
  useEffect(() => {
    console.log('use useEffect');
  });
  
  useEffect(() => {
    console.log('use useEffect once');
  },[]);

  return (
    <testContext.Provider value={{ testData }}>
    <div className="App">
      <Todolist
      todoList={todoList}
      onDelete={todoDelete}
      />
      <AddForm
        onNewTodo={onNewTodo}
      />
    </div>
    </testContext.Provider>
  );
}

export default App;
