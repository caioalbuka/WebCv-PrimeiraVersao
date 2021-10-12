import React from 'react'


import SubtituloComp from '../components/SubtituloComp/SubtituloComp'
import Subtitulo2Comp from '../components/Subtitulo2Comp/Subtitulo2Comp'
import DataComp from '../components/DataComp/DataComp'
import Denoir from '../Arrays/Denoir.jsx'
import Bk from '../Arrays/Bk.jsx'
import Cpqba from '../Arrays/Cpqba.jsx'
import TituloComp from '../components/TituloComp/TituloComp'
//import Habilidades from '../Arrays/Habilidades.jsx'

function Profissional() {


    return (
        <div>

            <div className='profissional'>
            <TituloComp title='Experiencias Profissionais' />
            </div>
            <SubtituloComp title='TÉCNICO DE CAMPO' />
            <Subtitulo2Comp title='UNICAMP-CPQBA' />
            <DataComp title='2009-2013' />
            <Cpqba />


            <SubtituloComp title='ATENTENDE DE HELP DESK' />
            <Subtitulo2Comp title='BK CONSULTORIA-CORREIOS' />
            <DataComp title='2008-2009' />
            <Bk />


            <SubtituloComp title='TÉCNICO DE INFORMATICA' />
            <Subtitulo2Comp title='DENOIR' />
            <DataComp title='2005-2006' />
            <Denoir />



        </div>


    )

}

export default Profissional
