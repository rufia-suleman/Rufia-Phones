import React from 'react'
import phone1 from "../pictures/phone1.jpg"
import phone3 from "../pictures/phone3.jpg"
import phone4 from "../pictures/phone4.jpg"


function Products() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>Samsung</h2>
    <img src={phone1} alt=""/>
    <p>Ghc 1300.00</p>
    <button>Buy Me</button>
    </div>
    
    <div className='card'>
    <h2>IPhone</h2>
    <img src={phone3} alt=""/>
    <p>ghc 1600.00</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Techno</h2>
    <img src={phone4} alt=""/>
    <p>Ghc1800.00</p>
    <button>Buy Me</button>
    </div>

    </div>

    <div className='headphones'></div>

    <div className='pendrives'></div>

    <div className='phonecases'></div>
    
    
    </div>
    
    
  )
}

export default Products