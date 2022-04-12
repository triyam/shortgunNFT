import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Explorepage from './exploreNFT/SrijanExplorepage';
import Navbar from './static/Navbar';
import Footer from './static/Footer';
import ProfileNFT from './profileNFT/ProfileNFT';
import Create from './createNFT/Create';
import Signup from './auth/Signup';
import Login from './auth/Login';
import HomePage from './home/HomePage';


const Main = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/explore" element={<Explorepage/>} />
        <Route path="/profile" element={<ProfileNFT/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
      
    {/* <Explorepage /> */}

    <Footer/>
    </>
  )
}

export default Main