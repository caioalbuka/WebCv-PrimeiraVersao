import React from 'react'
// import reactDom from 'react-dom'

// import Comentario from '../Comentario/Comentario'
// import TituloComp from '../components/TituloComp/TituloComp'
import Subtitulo2Comp from '../components/Subtitulo2Comp/Subtitulo2Comp.jsx'
import ButtonEmail from '../components/Button/ButtonEmail.jsx'
import ButtonWhatz from '../components/Button/ButtonWhatz.jsx'
import Imgqrcode from '../img/imgqrcode'
import SubtituloComp from '../components/SubtituloComp/SubtituloComp.jsx'


function Contato() {
    return (
<><SubtituloComp  title='Contato' />
<Subtitulo2Comp title='Telefone: (11) 95887-2257' />
<Subtitulo2Comp title='E-mail: caioalbuka@gmail.com' /><Subtitulo2Comp title='Ubatuba-SP' /><div className='links'>
    <a href="http://www.linkedin.com/in/caio-albuquerque-dos-santos-53b592208" target="_blank" rel="noreferrer">.   Linkedin   .</a>
</div><div className='buttonEmail'>

        <ButtonEmail />
        <ButtonWhatz />
    </div><div className='qrcode1'>
        <SubtituloComp title='Me adicione no WhatsApp!' />
        <Imgqrcode />
    </div></>
    )
}
export default Contato