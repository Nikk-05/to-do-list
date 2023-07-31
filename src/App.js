import './App.css';
import ToDo from './Components/ToDo';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    document.title="TO-DO List"
    },[])
  return (
    <div className="App">
     <ToDo/>
    </div>
  );
}

export default App;
