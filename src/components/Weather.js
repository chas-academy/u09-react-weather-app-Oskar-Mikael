import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import Loader from './LoadingSpinner';
import ReactMapGL from 'react-map-gl';
import axios from 'axios';
import loupe from '../assets/loupe.png';
import Marker from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import pin from '../assets/location-pin.png';

function Weather() {

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [errorMessage, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    const [responseObj, setResponseObj] = useState(false);
    const [responseObjHourly, setResponseObjHourly] = useState({});

    const [long, getLong] = useState();
    const [lat, getLat] = useState();

    const [myLong, getMyLong] = useState();
    const [myLat, getMyLat] = useState();

    const [viewport, setViewport] = useState({
        width: '50vw',
        height: '40vh',
        zoom: 12,
        coords: [lat, long]
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            getMyLong(position.coords.longitude);
            getMyLat(position.coords.latitude);
        })
    })


    const getForecast = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data)
                console.log(response)
                getLong(response.data.city.coord.lon)
                getLat(response.data.city.coord.lat)
                setError({})
                setLoading(false);
            })
            .catch(response => {
                setError(response.response.data)
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })
        setViewport({
            width: '50vw',
            height: '40vh',
            zoom: 12,
            coords: [lat, long],
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
        axios.get(`${process.env.REACT_APP_API_URL}units=${unit}&lat=${myLat}&lon=${myLong}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setResponseObj(response.data);
                console.log(responseObj);
                setError({})
                getLat(false)
                getLong(false)
                setLoading(false);
            })
            .catch(response => {
                setError('Unavailable')
                console.log(errorMessage)
                setResponseObj({});
                setLoading(false);
            })

        axios.get(`${process.env.REACT_APP_API_URL_HOURLY}units=${unit}&lat=${myLat}&lon=${myLong}&appid=${process.env.REACT_APP_API_KEY}`)
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
        setViewport({
            width: '50vw',
            height: '40vh',
            zoom: 12,
            coords: [myLat, myLong]
        })
    }

    return (
        <div className="container mx-auto pb-20">
            <div className="text-center">
                <form onSubmit={getForecast}>
                    <div className="md:flex block justify-center">
                        <input
                            className="mt-12 mb-4 md:w-1/2 bg-gray-200 py-4 px-6 text-2xl rounded-md"
                            type="text"
                            placeholder="Search weather"
                            maxLength="50"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        /><br></br>
                        <button className="md:mt-14 my-4 ml-2 p-2 h-4/5 bg-green-300 hover:bg-green-200 transition rounded-lg font-bold" type="submit"><img src={loupe} alt="search" /></button>
                    </div>
                    <select className="bg-gray-200 py-2 px-4" onChange={(e) => setUnit(e.target.value)}>
                        <option hidden>Select unit</option>
                        <option name="units" value="metric">Celsius</option>
                        <option name="units" value="imperial">Fahrenheit</option>
                    </select><br></br>


                </form>
                <div className="text-center md:text-left">
                    <button className="mt-4 bg-blue-300 hover:bg-blue-200 transition py-2 px-4 rounded-lg font-bold" onClick={getMyPosition}>
                        Get my position's Forecast
                </button>
                </div>
            </div>
            {loading ? <Loader /> :

                <Forecast responseObj={responseObj} responseObjHourly={responseObjHourly} errorMessage={errorMessage} unit={unit} />
            }

            {!responseObj ? null : <div className="flex justify-center mt-20">
                <ReactMapGL className="border-2 border-black " longitude={long ?long : myLong} latitude={lat ? lat : myLat} {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={viewport => {
                        setViewport(viewport)
                    }}
                    mapStyle="mapbox://styles/oskarb/cko00ufus570817o5ubebkcmi"><Marker mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} coordinates={[34.98234, 23.1313]}><img src={pin} /></Marker></ReactMapGL></div>}

        </div>
    );
}



export default Weather;
