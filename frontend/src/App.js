import logo from './logo.svg';
import './App.css';
import Navbar from './components/web/navbar';
import MapComponent from './components/maps/map';
import LastSeen from './components/plugins/lastSeen';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>


      <LastSeen></LastSeen>

      
    </div>
  );
}

export default App;
