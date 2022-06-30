import React from 'react'
import Logo from "../logo.png";
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div className="border 
    px-5 space-x-8 py-4 
    flex items-center ">
        <img className="w-[50px] md:w-[60px]" src={Logo}></img>
        <Link to="/" className="text-blue-900 font-bold text-2xl md:text-3xl hover:scale-110">Movies</Link>
        <Link to="/favourites" className="text-blue-900 font-bold text-2xl md:text-3xl hover:scale-110">Favourites</Link>

    </div>
  )
}

export default NavBar