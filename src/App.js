import './App.css';
import Todolist from './components/Todolist';
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import todoData from './data/todo-data.json';
import React, { useState } from 'react';
import { v4 } from 'uuid';

function App() {
  
  const [todoList, setTodoList] = useState(todoData);
  const [filter, setFilter] = useState('ALL');

  const onNewTodo = title => {
    const newTodoList = [
      ...todoList,
      {
        id: v4(),
        title: title,
        state: 'Incomplete',
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

  const changeState = (id,state) => {
    const changedList = todoList.map((todo) => {
      if (id === todo.id) {
        return {...todo, state};
      } else {
        return todo;
      }
    });
    setTodoList(changedList);
  }

  const handleFilter = (key) => {
    setFilter(key);
  }

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === 'ALL') return true;
    if (filter === 'Incomplete') return todo.state === 'Incomplete';
    if (filter === 'Complete') return todo.state === 'Complete';
  });
  
  return (
    <React.Fragment>
      <div className="App">
        <Filter
        onChange={handleFilter}
        ></Filter>
        <Todolist
        todoList={filteredTodoList}
        onDelete={todoDelete}
        changeTitle={changeTitle}
        changeState={changeState}
        />
        <AddForm
          onNewTodo={onNewTodo}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
