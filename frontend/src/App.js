
import './App.css';
import {BrowserRouter, Routes } from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Paths from './Pages/Paths';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Paths />
      <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
