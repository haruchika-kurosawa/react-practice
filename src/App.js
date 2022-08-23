import './App.css';
import Todo from './components/Todo';

const todoList = [
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

function getTodoList() {
  const gotList = todoList.map((item) => (
      <Todo {...item}/>
    ));

    return gotList;
}

function App() {
  return (
    <div className="App">
      <ul className='todoList'>{
      getTodoList()
      }</ul>
    </div>
  );
}

export default App;
