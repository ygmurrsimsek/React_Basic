import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { AllUsers } from './redux/userSlice';
function UserList() {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(AllUsers());
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default UserList