import React from 'react'
import { MdBookmarkRemove } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import '../css/todo.css';
function Todo({todo}) {
  const {id,content}=todo;

  return (
    <div  className='newTodo'>
        {/* burada flex yapıp sonrasında row diyerek divlerin satıra göre soldan sağa hizalanmasını istemiş olduk. */}
      <div>
        {content}
      </div>
      <div>
        <MdBookmarkRemove className='todo-icons'/>
        <LuClipboardEdit className='todo-icons' />
      </div>
    </div>
  )
}

export default Todo
