import React from 'react';
const Forecast = (props) => {

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
    const unixConvert = (unix) => {
        let date = new Date(unix * 1000);

        let hours = date.getHours();
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
            return 'There was an error with your search, please try again';
        }
    }

    const dayIndexes = ['0', '1', '2', '3', '4', '5'];

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



    return (
        <>
            {props.responseObj.cod === '200' &&
                <h2 className="text-4xl mt-12">{props.responseObj.city.name} </h2>}
            <div className="mt-10 grid grid-cols-3">

                {props.responseObj.cod === '200' ?

                    dayIndexes.map((day, index) => (


                        <div key={index} className="mb-10 bg-gray-400 mx-auto p-10 rounded-md">
                            <h3>{aryDates[day]}</h3>
                            <p>{capitalize(props.responseObj.list[day].weather[0].description)}.</p>

                            <p><strong>Temperature: </strong>{props.responseObj.list[day].temp.day} {unit} </p>

                            <p><strong>Temperature highest: </strong>{props.responseObj.list[day].temp.max} {unit} </p>

                            <p><strong>Temperature lowest: </strong>{props.responseObj.list[day].temp.min} {unit} </p>

                            <p><strong>Humidity: </strong>{props.responseObj.list[day].humidity}%</p>

                            <p><strong>Air Pressure: </strong>{props.responseObj.list[day].pressure} hPa</p>

                            <p><strong>Wind: </strong>{props.responseObj.list[day].speed} m/s </p>

                            <p><strong>Sunrise: </strong>{unixConvert(props.responseObj.list[day].sunrise)}</p>

                            <p><strong>Sunset: </strong>{unixConvert(props.responseObj.list[day].sunset)}</p>


                        </div>
                    ))
                    : null
                }

                
                <p>{errorValidate()}</p>

            </div>
        </>
    )
}
export default Forecast;