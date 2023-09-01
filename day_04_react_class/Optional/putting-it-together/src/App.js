
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 45,
      hair_color: 'Black'
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hair_color: 'Brown'
    },
    {
      firstName: 'Millard',
      lastName: 'Fillmore',
      age: 50,
      hair_color: 'Brown'
    },
    {
      firstName: 'Maria',
      lastName: 'Smith',
      age: 62,
      hair_color: 'Brown'
    }
  ]
  
  return (
    <div className="App" >
      {people.map((person,idx) => <PersonCard person = {person} key={idx}/>)}
    </div>
  );
}

export default App;
