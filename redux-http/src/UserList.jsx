import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { AllUsers } from './redux/userSlice';
function UserList() {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(AllUsers());
    },[]);

    const {users} =useSelector(store =>store.users);
    console.log(users);
  return (
    <div>
      {}
    </div>
  )
}

export default UserList