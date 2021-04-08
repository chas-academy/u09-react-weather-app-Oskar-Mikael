import React from 'react';
const Forecast = (props) => {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let unit;

    if (props.unit === 'metric') {
        unit = 'C°'
    } else {
        unit = 'F°'
    }

    const dayIndexes = ['0', '1', '2', '3', '4', '5'];

    return (
        <>
        {props.responseObj.cod === '200' &&
        <h2 className="text-4xl mt-12">{props.responseObj.city.name} </h2>}
        <div className="mt-10 grid grid-cols-3">
            
            {props.responseObj.cod === '200' ?
            
            dayIndexes.map((day, index) => (


                    <div key={index} className="mb-10 bg-gray-400 mx-auto p-10 rounded-md">
                        
                        <p>{capitalize(props.responseObj.list[day].weather[0].description)}.</p>

                        <p><strong>Temperature: </strong>{props.responseObj.list[day].temp.day} {unit} </p>

                        <p><strong>Temperature highest: </strong>{props.responseObj.list[day].temp.max} {unit} </p>

                        <p><strong>Temperature lowest: </strong>{props.responseObj.list[day].temp.min} {unit} </p>

                        <p><strong>Humidity: </strong>{props.responseObj.list[day].humidity}%</p>

                        <p><strong>Air Pressure: </strong>{props.responseObj.list[day].pressure} hPa</p>

                        <p><strong>Wind:  </strong>{props.responseObj.list[day].speed} m/s </p>


                    </div>
                ))
                : null
            }

        </div>
        </>
    )
}
export default Forecast;