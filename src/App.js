import React, {useState, useEffect} from "react"
import './App.css';
import Loading from './Loading';
import Tours from "./Tours"


//Adding the tour data from the api 
const url = 'https://course-api.com/react-tours-project';
function App() {

  const [load, setLoading] = useState(false)
  const [tours, setTours] = useState([]);
  
  const fetchTourInfo = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      const tours =  await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error){
      setLoading(false);
    }
   
  }

  useEffect(() => {
    fetchTourInfo();
  }, [])
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
