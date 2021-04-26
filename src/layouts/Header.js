import sun from '../assets/sun-color.png';

function Header() {
    return(
        <header className="bg-gradient-to-r py-4 from-green-500 to-blue-500 flex justify-evenly">
            <img src={sun} alt="sun" className="App-logo sm:w-36 w-16 hidden sm:block"/>
            <h1 className="text-5xl font-bold my-auto text-center">
                U09 Weather App
            </h1>
            <img src={sun} alt="sun" className="App-logo md:w-36 w-16 hidden sm:block"/>
        </header>
    )

}

export default Header;