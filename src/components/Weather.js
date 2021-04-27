import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import Loader from './LoadingSpinner';
import axios from 'axios';
import loupe from '../assets/loupe.png';

function Weather() {

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [errorMessage, setError] = useState({});
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data)
                console.log(response)
                setError({})
                setLoading(false);
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })

        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObjHourly(response.data)
                console.log(responseObjHourly)
                setError({})
                setLoading(false);
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })
    }

    const getMyPosition = () => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data);
                console.log(responseObj);
                setError({})
                setLoading(false);
            })
            .catch(response => {
                setError('Unavailable')
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })

        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObjHourly(response.data);
                console.log(responseObjHourly);
                setError({})
                setLoading(false);
            })
            .catch(response => {
                setError('Unavailable')
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })

        if (!long && !lat) {
            setError({})
            setError('Unavailable')
            setResponseObj({});
        }
    }

    return (
        <div className="container mx-auto pb-20">
            <div className="text-center">
                <form onSubmit={getForecast}>
                    <div className="flex justify-center">
                    <input
                        className="mt-12 mb-4 w-1/2 bg-gray-200 py-4 px-6 text-2xl rounded-md"
                        type="text"
                        placeholder="Search weather"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    /><br></br>
                     <button className="mt-14 ml-2 p-2 h-4/5 bg-green-300 hover:bg-green-200 transition rounded-lg font-bold" type="submit"><img src={loupe} alt="search"/></button>
                     </div>
                    <select className="bg-gray-200 py-2 px-4" onChange={(e) => setUnit(e.target.value)}>
                        <option hidden>Select unit</option>
                        <option name="units" value="metric">Celsius</option>
                        <option name="units" value="imperial">Fahrenheit</option>
                    </select><br></br>
                   

                </form>
                <div className="text-left">
                <button className="mt-4 bg-blue-300 hover:bg-blue-200 transition py-2 px-4 rounded-lg font-bold" onClick={getMyPosition}>
                    Get my position's Forecast
                </button>
                </div>
            </div>
            {loading ? <Loader/> : <Forecast responseObj={responseObj} responseObjHourly={responseObjHourly} errorMessage={errorMessage} unit={unit} /> }
            
        </div>
    );
}



export default Weather;
