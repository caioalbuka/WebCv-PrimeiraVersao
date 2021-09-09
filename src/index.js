import './indexst.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Trabalho from './components/Trabalhos'
import Card from './components/layout/Card'
import Titulo from './Titulo.jsx'


ReactDOM.render(
    <div className='bodydiv'>
        <div className='titulodiv'>
        <Titulo></Titulo></div>
        <div className='trabalhodiv'>
        <Card></Card>
        <Trabalho></Trabalho></div>
    

    </div>,

  

    document.getElementById('root')
)
