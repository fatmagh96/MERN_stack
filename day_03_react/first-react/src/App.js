import logo from './logo.svg';
import './App.css';
import FirstClassComponenet from './components/FirstClassComponent';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  const number = 13;
  const animals = ['cat','dog','lion','giraffe','monkey']
  return (
    <fieldset>
      <legend>**** App js*****</legend>
      <div className="App">
        <h1>Hello from the other side</h1>
        <FirstClassComponenet number={number}/>
        <hr />
        <SomeClassComponent animals={animals}/>
      </div>

    </fieldset>
  );
}

export default App;
