import React, {useState, useEffect} from "react"
import './App.css';
import Loading from './Loading';
import Tours from "./Tours"


//Adding the tour data from the api 
const url = 'https://course-api.com/react-tours-project';
function App() {

  const [load, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTourHandler = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  }
  const fetchTourInfo = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tourInfo =  await response.json();
      setTours(tourInfo);
      setLoading(false);
      //setTourInfo(tours)
       //console.log(tourInfo);
       
    }
    catch(error){
      setLoading(false);
    }
   
  }

  useEffect(() => {
    fetchTourInfo()
  }, [])
  if(load)
  {
    return ( 
      <main>
        <Loading />
      </main>
      
    );
  }
  if(tours.length === 0){
    return (
    <main>
      <div className="title">
        <h3>No more tours</h3>
        <button onClick={fetchTourInfo} className="btn">reset</button>
      </div>
    </main>
    )
  }
  return (
    <main>
      <Tours props={tours} removeTourHandler = {removeTourHandler} />
    </main>

  );
  }
  


export default App;
