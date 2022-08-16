import logo from './logo.svg';
import './App.css';
import Navbar from './Components/comon/Navbar';
import Landing from './Components/landing/Landing';
import Footer from './Components/comon/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Landing/>
     <Footer/>
    </div>
  );
}

export default App;
