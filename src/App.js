import './App.css';
import Weather from './components/Weather';
import Header from './layouts/Header';

function App() {

  return (
    <>
    <Header />
    <div className="App bg-gradient-to-b from-red-200 to-yellow-200 px-4 md:px-0 min-h-screen">
      
      
    
        <Weather />
    
    </div>
    </>
  );
}



export default App;
