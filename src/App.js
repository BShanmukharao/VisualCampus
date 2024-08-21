import Header from './Components/Header/Header'
import SideBar from "./Components/SideBar/SideBar";
import './App.css'

function App() {
  return (
    <div className='app-bg-container'>
      <SideBar />
      <Header/>
    </div>   
  );
}

export default App;
