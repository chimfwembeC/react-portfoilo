import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
      <div className="App">
          <LandingPage />
        </div>
    </div>
  );
}

export default App;
