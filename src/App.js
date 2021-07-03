import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <div className = "demo-site">
        <Navbar/>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
