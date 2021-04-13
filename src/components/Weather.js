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


    const getForecast = (e) => {
        e.preventDefault();

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

        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObjHourly(response.data)
                console.log(responseObjHourly)
                setError({})
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
            })
    }

    const getMyPosition = () => {
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data);
                console.log(responseObj);
                setError({})
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
            })

        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObjHourly(response.data);
                console.log(responseObjHourly);
                setError({})
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
            })

        if (!long && !lat) {
            setError('Unavailable')
            setResponseObj({});
        }
    }

    return (
        <div className="container mx-auto">
            <div>
                <form onSubmit={getForecast}>
                    <input
                        className="mt-12 mb-4 bg-gray-200 py-4 px-6 text-2xl rounded-md"
                        type="text"
                        placeholder="Search city weather"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    /><br></br>
                    <select className="bg-gray-200 py-2 px-4" onChange={(e) => setUnit(e.target.value)}>
                        <option hidden>Select unit</option>
                        <option name="units" value="metric">Celsius</option>
                        <option name="units" value="imperial">Fahrenheit</option>
                    </select><br></br>
                    <button className="mt-4 bg-green-300 hover:bg-green-200 transition py-2 px-4 rounded-lg font-bold" type="submit">Get Forecast</button>

                </form>
                <button onClick={getMyPosition}>
                    Get my position
                </button>
            </div>
            <Forecast responseObj={responseObj} responseObjHourly={responseObjHourly} errorMessage={errorMessage} unit={unit} />
        </div>
    );
}



export default Weather;
