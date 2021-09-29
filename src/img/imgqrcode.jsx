import React from 'react'
import './style.css'
import imgqrcode from './imgqrcode.png'

function Imgqrcode() {

    return (
        <div className='Qrcode'>
            <img height='200px' src={imgqrcode} alt="QRcode do WhatsApp" />
        </div>
    )


}
export default Imgqrcode