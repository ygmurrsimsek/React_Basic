import React from 'react'
import '../css/todocreate.css';
import { useState } from 'react';

function TodoCreate({ todoListAddValue}) {
      //şuanda inputta girilecek olan değeri tutacak bir değişken belirleyelim
     
      const [yeniTodo,setNewTodo]=useState('');
      const inputClear=()=>{
        setNewTodo('');//bunun ile todo oluşturduktan sonra inputun içi temizlenecek.
      }
      const createTodo = () => {
        if(!yeniTodo) return;
        const required={
          id:Math.floor(Math.random() * 999999),
          content:yeniTodo
        }
        todoListAddValue(required);
        inputClear();
      };
  return (

    <div className='todo-create'>
        <div className='todo'>
            <input value={yeniTodo} 
            onChange={(e)=>setNewTodo(e.target.value)} 
            placeholder='TODO Giriniz' className='todo-input'></input>
            <button className='todo-button-change' onClick={createTodo}>TODO Oluştur</button>
        </div>

    </div>
  )
}

export default TodoCreate
