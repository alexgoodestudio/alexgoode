import './Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import TopBanner from './Components/TopBanner';
import Expandable from './Components/Expandable';
import Story from './Components/Story';
import PlayZone from './Components/PlayZone';
// import Marquee from './Components/Marquee';


function App() {
  return (
    <Router>
      <div>
        <TopBanner/>
        <Nav/>
        <Banner/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/maderight" element={<Expandable/>} />
          <Route path="/story" element={<Story/>} />
          <Route path="/play-zone" element={<PlayZone/>} />
        </Routes>
        {/* <Marquee/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
