
import React, { useState } from 'react'
import logo from './cats.gif';
import './App.css';

const Ciounter = () => {
    const [perhitungan, pushTambah] = useState(0)

    return (
        <div style={
            {
                textAlign: 'center',
                marginTop: '75px',
            }
        }
        >
            <header className='bg'>

            <h1>perhitungan: {perhitungan}</h1>

            <button style={
                {
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    borderWidth: '5px'
                }
            } 
            onClick={() => pushTambah(perhitungan + 10)}>+10
            </button>


            <button style={
                {
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    borderWidth: '5px'
                }
            }
            onClick={() => pushTambah(perhitungan - 10)}> -10 </button>
            
   
            <div className="container">
                <img src={logo} alt="Animated" className="animated-image" />
            </div>

            </header>
        </div>
        
    )
}


export default Ciounter
