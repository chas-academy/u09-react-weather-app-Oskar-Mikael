import React, { useState } from 'react';
import Forecast from './Forecast';
import Search from './Search';
import axios from 'axios';

function Weather(props) {

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');

    const uriEncodedCity = encodeURIComponent(city);

    const [responseObj, setResponseObj] = useState({});

  

    const getForecast = (e) => {
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data)
                console.log(response)
            })
    }



    return (
        <div>
          
            <div>
                
            </div>
            <form onSubmit={getForecast}>
                <input
                    className="mt-12 mb-4 bg-gray-200 py-2 px-4"
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    /><br></br>
                <label className="mr-4">
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label><br></br>
                <button className="mt-4 bg-green-300 hover:bg-green-200 transition py-2 px-4 rounded-lg font-bold" type="submit">Get Forecast</button>
                
            </form>
            <Forecast responseObj={responseObj} unit={unit} />
        </div>
    );
}



export default Weather;
