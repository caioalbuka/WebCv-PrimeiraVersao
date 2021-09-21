import React from 'react'
import './style.css'
import TituloCom from '../TituloCom/TituloCom'
import InfoComp from '../InfoComp/InfoComp'
import DataComp from '../DataComp/DataComp'


function Cursos() {
    return (
        <div className='cursos'>

            <TituloCom title='New Horizont' />
            <DataComp title='2001-2002' />
            <InfoComp title='- Pacote Office' />
            <InfoComp title='- Flash 5.0' />
            <InfoComp title='- HTML - Intermediário' />

            <TituloCom title='StackX' />
            <DataComp title='2021 - em andamento' />
            <InfoComp title='- Python Basico' />
            <InfoComp title='- Soft Skills' />

            <TituloCom title='Digital Innovation One' />
            <DataComp title='2021' />
            <InfoComp title='- Introdução ao Git e Github' />
            <InfoComp title='- Introdução a criação de websites com HTML e CSS3' />
            <InfoComp title='- Programação para internet com JAVAScript' />

        </div>


    )

}

export default Cursos