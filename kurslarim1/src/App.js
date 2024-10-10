import './App.css';
import Header from './components/Header';
import { courses } from './components/data';
import  Course  from './components/Course';
import './css/course.css';
function App() {
  return (
    <div>
      <Header/> 
      <div className='course-main'>
        {
          courses?.map((courses) =>(

            <Course  key={courses.id} course={courses}/>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
