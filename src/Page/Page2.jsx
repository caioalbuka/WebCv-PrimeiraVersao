import React from 'react'
import './page2.css'

import TituloComp from '../components/TituloComp/TituloComp'
import SubtituloComp from '../components/SubtituloComp/SubtituloComp.jsx'
import DataComp from '../components/DataComp/DataComp.jsx'
import Dio from '../Arrays/Dio.jsx'
import NewH from '../Arrays/NewH.jsx'
import StackX from '../Arrays/StackX'



function Page() {
    return (
    <><div className='certificados'>
            <TituloComp title='Cursos e Certificados' />
        </div><div className='cursos'>
<div>
                <SubtituloComp  title='New Horizont' />
                <DataComp title='2001-2002' />
                <NewH />
</div><div>
                <SubtituloComp  title='StackX' />
                <DataComp title='2021 - em andamento' />
                <StackX />
</div><div>
                <SubtituloComp  title='Digital Innovation One' />
                <DataComp title='2021' />
                <Dio />
</div>

            </div></>


    )
    }

export default Page