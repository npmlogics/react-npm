import './App.css';
import { Button } from './components';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button id="test" type="button" name="test" label="Test" kind="primary" handleClick={() => console.log("Clicked!")} />
      </header>
    </div>
  );
}

export default App;
