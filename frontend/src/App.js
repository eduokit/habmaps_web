import './App.css';
import Navbar from './components/web/navbar';
import MapComponent from './components/maps/map';
import LastSeen from './components/plugins/lastSeen';
import Footer from './components/web/footer';
import Sponsors from './components/web/sponsors';

require('./util/tsocket')


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MapComponent/>
      <LastSeen></LastSeen>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </div>
  );
}

export default App;
