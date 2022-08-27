import './App.css';
import Todolist from './components/Todolist';
import React, { useState ,useContext, createContext } from 'react';

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

export const TodoContext = createContext(data);

function App() {
  const [todoList, setTodoList] = useState(data);

  function todoDelete(id) {
    const deletedData = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(deletedData);
  }
  
  return (
    <TodoContext.Provider>
      <div className="App">
        <Todolist/>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
