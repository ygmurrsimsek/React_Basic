
import React,{useState} from 'react';

function MyButton(){
    const [count,setCount]=useState(0);
//use stteden bir count yani mrvcut durum 
//birde onu güncellememizi sağlayan fonksiyon.kafamıza göre isim verebiliriz.
//başlangıçta count 0 fakat bu durumu değiştirmek istersek setCount işlevini çağırırız ve yeni değer ekleyebiliriz.
    return(
        <button onClick={()=> setCount(count+1)}>
            You click me {count} times
        </button>
    );
}
export default MyButton;