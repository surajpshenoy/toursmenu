import React, {useState, useEffect} from "react"
import './App.css';
import Loading from './Loading';
import Tours from "./Tours"

function App() {

  const [load, setLoading] = useState(false)
  const [tours, setTours] = useState([]);
  
  if(load)
  {
    return ( 
      <main>
        <Loading />
      </main>
      
    );
  }

  return (
    <main>
      <Tours/>
    </main>

  );
  }
  


export default App;
