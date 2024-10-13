import React from 'react'
import { useState } from 'react';
import { MdBookmarkRemove } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

import '../css/todo.css';
function Todo({todo,removeContent,karsilastir}) {
  const {id,content}=todo;//inputa girilen değerleri yazdırmak için.bu tododa yazan değer.
  const [check,checkTrue]=useState(false);
  const [güncelTodo,setGüncelTodo]=useState(content); //güncellemek için bastığımızda div boş oluyordu bunun için önceki değer üstünden değişiklik yapmak için o todonun içindeki değeri tuttuk . ve bunu inputa verdik
  console.log(content);
  const removeTodo=()=>{
      removeContent(id); // removeContent callback'ına id'si göndererek bu id'ye sahip todoyu listeden silecek.
  }
  const karsilas=()=>{
    const required={
      id:id,
      content:güncelTodo
    }
    karsilastir(required); //karsilastir callback'ına id'si ve güncel todo'yu göndererek bu id'ye sahip todoyu listeden silecek.
    checkTrue(false); //input'a bastığımızda inputu boşaltmak için.
  }
  return (
    <div  className='newTodo'>
        {/* burada flex yapıp sonrasında row diyerek divlerin satıra göre soldan sağa hizalanmasını istemiş olduk. */}
      <div>
        {check? 
         <input value={güncelTodo} type='text' onChange={(e)=>{setGüncelTodo(e.target.value)}}className='todo-input-two'></input>
        : <div style={{ fontFamily: "'Courier New', Courier, monospace" ,paddingLeft:'5px',fontSize:'13px'}}>{content}</div>}
        {console.log(güncelTodo)}
      </div>
      <div>
        {/*onclick işleminde todoyu silmek için kullanıyoruz.*/}
        <MdBookmarkRemove className='todo-icons' onClick={removeTodo}/>
        {check ? <FaCheck style={{marginRight:'15px'}} onClick={karsilas}/> : <LuClipboardEdit className='todo-icons' onClick={()=>{
          checkTrue(true);
        }} />}

        
      </div>
    </div>
  )
}

export default Todo
