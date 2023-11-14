import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
