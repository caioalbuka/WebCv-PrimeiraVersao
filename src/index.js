import './indexst.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Trabalho from './components/Trabalhos'
//import App from './components/App'
import Header from './components/layout/Header'
import Img from './img/Image'
import Card from './components/layout/Card'
//import Panorama from './components/Panorama/Panorama'



ReactDOM.render(

    <div className="pai">
        <>
            <div className='topo'>
                <div className='header'><Header /></div>
                <div className='img'><Img /></div>
            </div>

            <div className="bodydiv">

                <div className='trabalhodiv'><Trabalho /></div>
                <div className='trabalhodiv'><Card /></div>
                {/* <div className='panorama'><Panorama /></div> */}

            </div>
        </>
    </div>,


    document.getElementById('root')
)

