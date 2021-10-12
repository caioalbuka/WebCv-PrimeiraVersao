import React from 'react'
import Habilidades from '../Arrays/Habilidades'
import HabilidadesPro from '../Arrays/HabilidadesPro'
import TituloComp from '../components/TituloComp/TituloComp'



function Habilidade() {
    return (
<div className='HabilidadesGerais'>
<TituloComp  title='Habilidades Pessoais' />
            <div><Habilidades /></div>
            <TituloComp  title='Habilidades Profissionais' />
            <div><HabilidadesPro /></div>
            
    </div>
    )
}
export default Habilidade