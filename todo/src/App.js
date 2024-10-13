import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useState } from 'react';
function App() {

const [todoList,newTodoList]=useState([]);//listeme başlangıç değeri veriyorum . ve değişimleri buradan kontrol ediyorum.

  const todoListAdd=(newTodo)=>{ /*burada newTodo yeni eklenen todolist değeridir.* */
    newTodoList([...todoList,newTodo]);//burada todolistime yeni oluşturulmak istenen todoyu ekliyorum.
  }
//silteden eleman silme.
  const remove=(id)=>{
    newTodoList(([...todoList.filter((item)=>item.id!==id)]));//bununla todolistesindeki değerleri alır idsine erişir ve idleri karşılaştırır uyuşmayan idleri tekrardan bir todolist haline getirir ve silinmesi istenen olarak gelen id listeden silinir.
  }
  console.log(todoList);
  
  const karsilastir= (newTodo)=>{
    const karsilas=todoList.map((todo)=>{
      if(todo.id!==newTodo.id){
        return todo;
      }
      return newTodo;
    })
    newTodoList([...karsilas]);
  }; 
  return (
    <div className='app'>
      <div className='main'>

        <TodoCreate todoListAddValue={todoListAdd}/>  {/* TodoCreate component'ı render ediyoruz.ve props olarak gönderiyoruz todo createye.çünkü oluşturulacak olan dosyaya bu fonksiyonu gönderip orada kullanacağız.*/}
        <TodoList todos={todoList} removeContent={remove} karsilastir={karsilastir}/>
              
      </div>
    </div>
   //listeleyeceğiz todoları bunun için ilk olarak listelenecek componente bu todoları göndermeliyiz props olarak.
  );
}

export default App;
