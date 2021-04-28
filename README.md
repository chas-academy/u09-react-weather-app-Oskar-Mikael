# U09 React Weather application

This is a school project to create a React Weather Application. The app fetches data from the [https://openweathermap.org/] API. You can search cities and locations and see the weather forecast for that posistion, both daily and hourly.

## How to run the application

1. Clone down the repository locally.

2. Run `npm install` to install packages locally.

3. Create a `.env` file in the root folder of your repository. Here is where you will place the api url and api key

4. To get an api key, you must register to the https://openweathermap.org/ API, and you will then be given a key.

5. To can an access token to the map api, you must register to the https://www.mapbox.com/ API, and you will be given an access token

6. Create 4 variables in the .env file, them being:

- **REACT_APP_API_URL** (Set this to: 'https://api.openweathermap.org/data/2.5/forecast/daily?')
- **REACT_APP_API_URL_HOURLY** (Set this to: 'https://api.openweathermap.org/data/2.5/forecast/hourly?')
- **REACT_APP_API_KEY** (Set this to the api key that you got when registering)
- **REACT_APP_MAPBOX_TOKEN** (Set this to the access token you got when registering)

Make sure to name the variables exactly to these, as it is case sensitive.

Make sure to restart the app after changing the `.env` file, if you had it running.

7. Start the app with `npm start`, and you can now search for weather!

*Created by Oskar Boström 2021*
