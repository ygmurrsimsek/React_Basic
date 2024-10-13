import './App.css';
import { useSelector} from 'react-redux'
function App() {
  const {value}=useSelector((store)=>store.counter);
  console.log(value);
  return (
    <div>

      redux
    </div>
  );
}

export default App;
