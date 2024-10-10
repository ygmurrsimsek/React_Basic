import './App.css';
import Currensy from './components/currensy';

function App() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh'
    }}>
      <Currensy/>
    </div>
  );
}

export default App;
