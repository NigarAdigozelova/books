import React from 'react'
import image from "../images/headerbg (1).jpg"
import Input from './Input'

const Header = () => {
    return (
        <>
            <div>
                <div className='search'>
                    <div className='nigar'> 
                    <h1 className='title'>Dada Book Searching App </h1>
                    <div>
                    {/* <input className='input' type="text" name="" id="" />
                    <i  className="fa-solid fa-magnifying-glass"></i> */}
                    <Input/>

                    </div>
                    </div>

                    <img style={{}} src={image} alt="" />
                </div>

               
            </div>
        </>
    )
}

export default Header