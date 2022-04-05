import React from 'react'
import phones from "../pics/phones.jpg"
import headphones from "../pics/headphones.jpg"
import drives from "../pics/drives.jpg"
import cases from "../pics/cases.jpg"
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>
    <div className='card'>
    <h2>SmartPhone</h2>
    <img src={phones} alt=""/>
    <p>we sell quality Smart Phone at affordable prices</p>
    <button><Link to="/products">View Phones</Link></button>
    </div>

    <div className='card'>
    <h2>HeadPhones</h2>
    <img src={headphones} alt=""/>
    <p>we sell quality Head Phone at affordable prices</p>
    <button><Link to="/products">View HeadPhones</Link></button>
    </div>
    </div>
    
    <div className='secondrow'>
    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drives} alt=""/>
    <p>we sell quality  PenDrives at affordable prices</p>
    <button><Link to="/products">View PenDrives</Link></button>
    </div>

    <div className='card'>
    <h2>PhoneCases</h2>
    <img src={cases} alt=""/>
    <p>we sell quality  Phone cases at affordable prices</p>
    <button><Link to="/products">View Phones</Link></button>
    </div>
    </div>



    
    
    </div>
  )
}

export default Home