import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Pagination from "./components/Pagination"
import Favourties from "./components/Favourites"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>

        <Route path="/" element={<>
        <Banner/>
        <Movies/>
        </>}/>

        <Route path="/favourites" element={<Favourties></Favourties>}/>
      
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
