import './App.css';
import axios from 'axios'
import {useEffect} from 'react';
function App() {
  /*GET METODU
  // const getAllUsers= async()=>{
  //   const response=await axios.get('http://localhost:3005/users');
  //   console.log(response.data);
  // }
  //response.data bunun sayesinde verilere bakabiliriz.
  //onun dışında axios kütüpühanesini çağırmadan çalışmaz axios.
  //axios.get metoduyla veriyi çekiyoruz.
  //async ve axios uzun süreli işlemler için yani asenkron işlemler için kullanılır.
  //useeffect ile veri çekme işini  sadece sayfa yüklendiğinde yaptırıyoruz.
    // useEffect(()=>{
    //   getAllUsers();
    // },[]);

    //şimdi idye göre o kişiye ulaşalım
    // const getUsersId=async(userId)=>{
    //   const response=await axios.get('http://localhost:3005/users/'+userId);
    //   console.log(response.data);
    // }

    // useEffect(()=>{ 
    //   getUsersId(2);
    // },[]);*/

//POST METODU
    /*yeni bir kullanıcıyı verimize ekleyelim
  const UserPost =async(newUser)=>{
    await axios.post('http://localhost:3005/users',newUser);
  }
  useEffect(()=>{
    const user={
      "id": "3",
      "name": "DODO",
      "age": 21,
      "password": "aaa",
      "email": "adsddsf"
    }
    UserPost(user);
  },[]);*/

  //PUT İSTEĞİ
  /*const putUser=async(userId,putuser)=>{
    await axios.put("http://localhost:3005/users/"+userId , putuser)
  }

  useEffect(()=>{
    putUser(1,{
      "name": "yagmur",
      "age": 22,
      "password": "asdaa",
      "email": "adsddsf"
    })
  },[]);*/

  //DELETE İSTEĞİ
  
  return (
    
    <div>

    </div>
  );
}

export default App;
