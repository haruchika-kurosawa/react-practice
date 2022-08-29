import './App.css';
import Todolist from './components/Todolist';
import AddForm from './components/AddForm';
import React, { useState ,useContext, createContext } from 'react';
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

export const TodoContext = createContext(data);

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
  
  return (
    <div className="App">
      <Todolist
      todoList={todoList}
      onDelete={todoDelete}
      />
      <AddForm
        onNewTodo={onNewTodo}
      />
    </div>
  );
}

export default App;
