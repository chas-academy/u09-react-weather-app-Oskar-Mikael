
function Footer() {

    return (
        <footer className="bg-gray-800 h-64 border-t-4 border-blue-400">
            <div className="container my-10 text-white mx-auto px-4 md:p-0">
                <h2 className="text-2xl font-bold">
                    U09 Weather Application
                </h2>
                <p className="mt-2 text-lg mb-10">
                    An application created with the React Framework
                </p>
                <p>
                    Created by Oskar Boström, 2021
                </p>
                <p>
                    Student at Chas Academy
                </p>
                <a className="mt-10 underline text-blue-400 hover:no-underline" href="https://oskarbostrom.com" target="_blank" rel="noreferrer">
                    oskarbostrom.com
                </a>
            </div>
        </footer>

    )
}

export default Footer;
