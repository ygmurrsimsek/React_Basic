import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useState } from 'react';
function App() {

const [todoList,newTodoList]=useState([]);

  const todoListAdd=(newTodo)=>{ /*burada newTodo yeni eklenen todolist değeridir.* */
    newTodoList([...todoList,newTodo]);
  }
  console.log(todoList);

  return (
    <div className='app'>
      <div className='main'>

        <TodoCreate todoListAddValue={todoListAdd}/>  {/* TodoCreate component'ı render ediyoruz.ve props olarak gönderiyoruz todo createye. */}
        <TodoList todos={todoList}/>
              
      </div>
    </div>
   //listeleyeceğiz todoları bunun için ilk olarak listelenecek componente bu todoları göndermeliyiz props olarak.
  );
}

export default App;
