import React from 'react'
import Todo from './Todo';
function TodoList({todos,removeContent,karsilastir}) {
  return (
    <div style={{width:'100%'}}>
      {todos && todos.map((todo)=>(//maplayip içindeki elemanlara tek tek erişiyoruz ve bunu props olarak divin içinde yazdırmak için gönderiyoruz.
        <Todo todo={todo} karsilastir={karsilastir} key={todo.id} removeContent={removeContent}/>
      ))


      }
    </div>
  )
}

export default TodoList
