import React from 'react'
import {FaApple} from "react-icons/fa"
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='header'>
    <FaApple className='icon'/>
    <h2>Gidigidi Phones & Accessories</h2>
    <ul>
  
    <li><Link to ="/"> Home </Link></li>
    <li><Link to ="/about"> About Us </Link></li>
    <li><Link to ="/products"> Products </Link></li>
    <li><Link to ="/contact"> Contac Us </Link></li>
    
    </ul>

    </div>
  )
}

export default NavBar