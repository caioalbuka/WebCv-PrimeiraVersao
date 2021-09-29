import React from 'react'
import './style.css'

function ButtonEmail() {
    return (
        <div className='buttonEmail'>
                <form method="post" action="mailto:caioalbuka@gmail.com" >
                <button title="Clique aqui para me mandar um E-mail">Enviar e-mail</button>

            </form>

        </div>
    )

}

export default ButtonEmail