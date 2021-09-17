import React from 'react'
import './style.css'

function TituloComp(props) {

    return <div className='tituloComp'>
        {props.title}

    </div>

}

export default TituloComp




/*

Exemplo de Soma

function soma(a, b) {
   // return a + b
}
   function TituloComp(props) {

    return <h1><div>
        {soma(props.numero1, props.numero2)}

    </h1>;
}

export default TituloComp*/
