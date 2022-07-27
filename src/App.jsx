import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChooseGame from './pages/ChooseGame/ChooseGame';
import Csgo from './pages/CSGO/Csgo';
import LOL from './pages/LOL/LOL';
import BrawlStars from './pages/BrawlStars/BrawlStars';
import Landing from './pages/Landing/Landing';
import RespectRanking from './pages/RespectRanking/RespectRanking';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/choose-a-game' element={<ChooseGame />} />
        <Route exact path='/cs-go' element={<Csgo />} />
        <Route exact path='/league-of-legends' element={<LOL />} />
        <Route exact path='/brawl-stars' element={<BrawlStars />} />
        <Route exact path='/:game/respect-ranking' element={<RespectRanking />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
