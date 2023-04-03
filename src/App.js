import logo from './logo.svg';
import './App.css';
import Mode from './Mode';
import Buttons from './Buttons';
import People from './People';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mode />
        <Buttons />
      </header>
      <hr></hr>
      <People />
    </div>
  );
}

export default App;
