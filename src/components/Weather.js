import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import axios from 'axios';

function Weather() {

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [errorMessage, setError] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    const [responseObj, setResponseObj] = useState({});
    const [responseObjHourly, setResponseObjHourly] = useState({});

    const [long, getLong] = useState('');
    const [lat, getLat] = useState('');


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            getLong(position.coords.longitude);
            getLat(position.coords.latitude);
        })
    })


    const getForecast = () => {
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data)
                console.log(response)
                setError({})
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
            })
    }

    const getHourlyForecast = () => {
        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObjHourly(response.data)
                console.log(responseObjHourly)
                setError({})
            })
    }

    const getMyPosition = () => {
        axios.get(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data);
                console.log(responseObj);
                setError({})
            })
        if (!long && !lat) {
            setError('Unavailable')
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getForecast();
        getHourlyForecast();
    }



    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="mt-12 mb-4 bg-gray-200 py-2 px-4"
                    type="text"
                    placeholder="Search city weather"
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
            <button onClick={getMyPosition}>
                Get my position
                </button>
            <Forecast responseObj={responseObj} responseObjHourly={responseObjHourly} errorMessage={errorMessage} unit={unit} />
        </div>
    );
}



export default Weather;
