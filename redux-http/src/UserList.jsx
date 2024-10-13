import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { AllUsers } from './redux/userSlice';
import User from './redux/User.jsx';
function UserList() {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(AllUsers());
    },[]);

    const {users} =useSelector(store =>store.users);
    console.log(users);
  return (
    <div>
      {
      users && users.map((kullanicilar)=>(
        <User userlar={kullanicilar}/>
      ))
      }
    </div>
  )
}

export default UserList