import React from 'react';
import cloud from '../assets/cloud.png';
import sun from '../assets/sun.png';
import snow from '../assets/snow.png';
import thunder from '../assets/thunder.png';
import drizzle from '../assets/drizzle.png';
import rainy from '../assets/rainy.png';
import temperature from '../assets/thermometer.png';
import humidity from '../assets/humidity.png';
import gauge from '../assets/gauge.png';
import wind from '../assets/wind.png';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';
import Country from './Country';

const Forecast = (props) => {

    const response = props.responseObj;
    const responseHourly = props.responseObjHourly;

    // Capitalize the first letter of a string. Useful, because the weather description starts with a lower case.
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let unit;
    if (props.unit === 'metric') {
        unit = 'C°'
    } else {
        unit = 'F°'
    }

    //Convert unix numbers into 24 hour format. Useful, because sunrise and sunset data from API is written in unix format
    const unixConvert = (unix, timezone) => {
        const offset = new Date().getTimezoneOffset() / 60;
        const date = new Date((unix + timezone) * 1000);

        let hours = date.getHours() + offset;
        if (hours.toString().length === 1) {
            hours = '0' + hours
        }
        let minutes = date.getMinutes();
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes
        }
        let seconds = date.getSeconds();
        if (seconds.toString().length === 1) {
            seconds = '0' + seconds
        }

        return (`${hours}:${minutes}:${seconds}`);
    }

    //Return error message if search was faulty
    const errorValidate = () => {
        if (props.errorMessage.cod === '400') {
            return 'There was an error with your search, please try again';
        } else if (props.errorMessage.cod === '404') {
            return 'Your search gave no results';
        } else if (props.errorMessage === 'Unavailable') {
            return 'Position unavailable, please enable this in your browser settings'
        } 
    }

    const dayIndexes = ['0', '1', '2', '3', '4', '5'];
    const hourIndex = ['0', '3', '6', '9', '12', '15', '18', '21'];

    //Get current date an loop for each upcoming day, adding it to an array which is then used to display dates in forecast
    const getDay = (startDate, daysToAdd) => {
        let aryDates = [];

        for (let i = 0; i <= daysToAdd; i++) {
            let currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push(dayString(currentDate.getDay()));
        }

        return aryDates;
    }

    const dayString = (dayIndex) => {
        const weekdays = new Array(7);
        weekdays[0] = 'Sunday';
        weekdays[1] = 'Monday';
        weekdays[2] = 'Tuesday';
        weekdays[3] = 'Wednesday';
        weekdays[4] = 'Thursday';
        weekdays[5] = 'Friday';
        weekdays[6] = 'Saturday';

        return weekdays[dayIndex];
    }

    const startDate = new Date();
    const aryDates = getDay(startDate, 7);

    const weatherType = (weather) => {
        let weatherImg;
        if (weather === 'Snow') {
            weatherImg = snow;
        } else if (weather === 'Clear') {
            weatherImg = sun;
        } else if (weather === 'Thunderstorm') {
            weatherImg = thunder;
        } else if (weather === 'Clouds') {
            weatherImg = cloud;
        } else if (weather === 'Drizze') {
            weatherImg = drizzle
        } else if (weather === 'Rain') {
            weatherImg = rainy;
        }

        return weatherImg;
    }

    return (
        <>

            {response.cod === '200' &&
                <div>
                    <div className="md:flex block">
                    <h2 className="pt-20 text-5xl">{response.city.name},&nbsp;</h2>
                    <Country country={response.city.country}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:gap-x-40 gap-x-10 gap-y-20">
                        <div className="p-6 bg-gradient-to-r from-gray-100 to-red-200 rounded-xl shadow-xl self-start">
                            <h2 className="text-4xl font-bold">Today's weather</h2>

                            <img src={weatherType(response.list[0].weather[0].main)} className="mx-auto mb-6" alt={weatherType(response.list[0].weather[0].main)} />

                            <p className="text-3xl text-center">{capitalize(response.list[0].weather[0].description)}.</p>

                            <div>
                                <p className="text-5xl font-bold mt-10 mb-2">{response.list[0].temp.day} {unit}</p>
                                <p className="text-lg mb-6">Feels like {response.list[0].feels_like.day} {unit}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-4">
                                <div className="flex">
                                    <img src={temperature} alt={temperature}/>
                                    <p className="pl-2"><strong>Highest/Lowest: </strong>{response.list[0].temp.max}/{response.list[0].temp.min} {unit} </p>
                                </div>

                                <div className="flex">
                                    <img src={humidity} alt={humidity}/>
                                    <p className="pl-2"><strong>Humidity: </strong>{response.list[0].humidity}%</p>
                                </div>

                                <div className="flex">
                                    <img src={gauge} alt={gauge}/>
                                    <p className="pl-2"><strong>Air Pressure: </strong>{response.list[0].pressure} hPa</p>
                                </div>

                                <div className="flex">
                                    <img src={wind} alt={wind}/>
                                    <p className="pl-2"><strong>Wind: </strong>{response.list[0].speed} m/s </p>
                                </div>

                                <div className="flex">
                                    <img src={sunrise} alt={sunrise}/>
                                    <p className="pl-2"><strong>Sunrise: </strong>{unixConvert(response.list[0].sunrise, response.city.timezone)}</p>
                                </div>

                                <div className="flex">
                                    <img className="" src={sunset} alt={sunset}/>
                                    <p className="pl-2"><strong>Sunset: </strong>{unixConvert(response.list[0].sunset, response.city.timezone)}</p>
                                </div>

                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-blue-200 to-gray-100 rounded-xl shadow-xl">
                            <h2 className="text-4xl font-bold">Hourly forecast</h2>
                            <div className="grid md:grid-cols-2 grid-cols-1">
                                {responseHourly.cod === '200' ? hourIndex.map((hour, index) => (
                                    <div key={index} className="">
                                        <p className="mt-4 text-2xl">{unixConvert(responseHourly.list[hour].dt, responseHourly.city.timezone)}</p>
                                        <p className="text-center text-3xl font-bold">{responseHourly.list[hour].main.temp} {unit}</p>
                                        <img src={weatherType(responseHourly.list[hour].weather[0].main)} className="mx-auto my-6 md:w-1/4 w-1/3" alt="cloud" />
                                        <hr className="mx-2"></hr>
                                    </div>
                                )) : null}
                            </div>
                        </div>
                    </div>

                </div>

            }

            <div className="mt-24">
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3">

                    {response.cod === '200' ?

                        dayIndexes.map((day, index) => (


                            <div key={index} className="mb-10 bg-gray-400 mx-auto p-10 rounded-md bg-gradient-to-b from-gray-400 to-gray-300">

                                <h3 className="text-center text-3xl mb-4 font-bold">{aryDates[day]}</h3>
                                <img src={weatherType(response.list[day].weather[0].main)} className="mx-auto mb-2" alt="cloud" />
                                <p className="text-center text-2xl mb-6">{capitalize(response.list[day].weather[0].description)}.</p>

                                <p><strong>Temperature: </strong>{response.list[day].temp.day} {unit} </p>

                                <p><strong>Temperature highest: </strong>{response.list[day].temp.max} {unit} </p>

                                <p><strong>Temperature lowest: </strong>{response.list[day].temp.min} {unit} </p>

                                <p><strong>Humidity: </strong>{response.list[day].humidity}%</p>

                                <p><strong>Air Pressure: </strong>{response.list[day].pressure} hPa</p>

                                <p><strong>Wind: </strong>{response.list[day].speed} m/s </p>

                                <p><strong>Sunrise: </strong>{unixConvert(response.list[day].sunrise, response.city.timezone)}</p>

                                <p><strong>Sunset: </strong>{unixConvert(response.list[day].sunset, response.city.timezone)}</p>


                            </div>
                        ))
                        : null
                    }
                </div>
            </div>

            <p className="text-2xl text-center">{errorValidate()}</p>

        </>
    )
}
export default Forecast;