import {useEffect,useState} from 'react';
import './App.css';

function App() {
  const [name,setName]=useState(' ');
  const [lastName,setlastName]=useState(' ');

  useEffect( () => {
    console.log('her zaman calisir');
  });//bu her yapılan etkide çalisir

  useEffect( () => {
    console.log('her zaman calisir');
  },[]);//bu ilk sayfa yüklendiginde calisir
  useEffect(()=>{
    console.log('sadece name degistiginde calisir');
  },[name]);

  useEffect(()=>{
    console.log('sadece lastName degistiginde calisir');
  },[lastName]);

  return (
    <div>
      <div>
        <button onClick={()=>{setName('Yagmur');}}>
            Adi Degistir
        </button>
      </div>

      <div>
        <button onClick={()=>{setlastName('Simsek');}}>
            Soyadi Degistir
        </button>
      </div>
    </div>
  );
}

export default App;
