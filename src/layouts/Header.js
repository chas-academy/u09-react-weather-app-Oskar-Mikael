import favicon from '../assets/favicon.png';
import sun from '../assets/sun-color.png';

function Header() {
    return(
        <header className="bg-gradient-to-r from-green-500 to-blue-500 flex justify-evenly">
            <img src={favicon} className="w-36" alt="application-logo"/>
            <h1 className="text-5xl font-bold py-8">
                U09 Wheather App
            </h1>
            <img src={sun} alt="sun" className="w-36"/>
        </header>
    )

}

export default Header;