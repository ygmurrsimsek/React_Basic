import './App.css';
import { useSelector,useDispatch} from 'react-redux'
import { increment,description } from './redux/CounterSlice';
function App() {
  //useSelector statelere .
  const dispatch=useDispatch();
  const {value}=useSelector((store)=>store.counter);
  console.log(value);
  return (
    <div>
      <div>{value}</div>
      <div>
        <button type="button" onClick={()=>{dispatch(increment())}}>Arttir</button>
        <button type='button' onClick={()=>{dispatch(description())}}>Azalt</button>

      </div>
    </div>
  );
}

export default App;
