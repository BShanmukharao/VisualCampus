import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import './App.css'
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header/Header';
/*
return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
  );
*/

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
