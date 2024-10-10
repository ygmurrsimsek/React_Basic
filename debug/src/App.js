import {useState} from 'react';
import './App.css';

function App() {

  //ortalama buldurduk.
  const [vize1,setvize1]=useState(0);
  const [vize2,setvize2]=useState(0);


  const ortalamaBul=()=>{
    const ortalama=(topla())/2;
    yazdir(ortalama);
  }

  const topla=()=>{
      const toplam=(vize1+vize2);
      return toplam;
  }

  const yazdir=(sonuc)=>{
    console.log(sonuc);
  }
  return (
    <div>
      <div>
        <input type='number' value={vize1} onChange={(e)=>{
          setvize1(Number(e.target.value))
        }}></input>
      </div>
      <hr />
      <div>
      <input type='number' value={vize2} onChange={(e)=>{
        setvize2(Number(e.target.value));
      }}></input>
      </div>
      <div>
        <button onClick={ortalamaBul}>
          Ortalama Bul
        </button>
      </div>
    </div>
  );
}

export default App;
