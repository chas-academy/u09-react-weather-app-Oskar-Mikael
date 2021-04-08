import React, { useEffect, useState } from "react";
import './App.css';
import Weather from './components/Weather';
import Header from './layouts/Header';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {

    const fetchData = async () =>{ navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
  }
    fetchData();
  }, [lat, long])


  return (
    <div className="App">
      <Header />
      
    
        <Weather />
    
    </div>
  );
}



export default App;
