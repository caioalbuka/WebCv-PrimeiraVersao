import React from 'react'
import './style.css'
import imagetest from './teste.jpeg'

function Img() {

    return (
        <div className='foto'>
            <img height='120px' src={imagetest} alt="minha foto" />
        </div>
    )


}
export default Img
