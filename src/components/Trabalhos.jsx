import React from 'react'
import './trabalhost.css'
import TituloComp from './TituloComp/TituloComp'
import SubtituloComp from './SubtituloComp/SubtituloComp'
import Subtitulo2Comp from './Subtitulo2Comp/Subtitulo2Comp'
import DataComp from './DataComp/DataComp'
import InfoComp from './InfoComp/InfoComp.jsx'

function Trabalho() {

    // <Exemplo atr='nome do titulo' />

    return (
        <div>
         
            <TituloComp title='Principais Habilidades' />
            <InfoComp title='- Trabalho em grupo' />
            <InfoComp title='- Comunicação' />
            <InfoComp title='- Foco' />
            <InfoComp title='- Raciocínio lógico' />

            <TituloComp title='Experiência Profissional' />
            <SubtituloComp title='TÉCNICO DE CAMPO' />
            <Subtitulo2Comp title='UNICAMP-CPQBA' />
            <DataComp title='2009-2013' />
            <InfoComp title='- Trabalho em equipe' />
            <InfoComp title='- Elaboração e apresentação de artigos e projetos em simpósios' />
            <InfoComp title='- Manutenção da área de pesquisa' />
            <InfoComp title='- Extração de óleos' />

            <SubtituloComp title ='ATENTENDE DE HELP DESK' />
            <Subtitulo2Comp title ='BK CONSULTORIA-CORREIOS' />
            <DataComp title ='2008-2009' />
            <InfoComp title ='- Manutenção dos softwares dos correios via remoto' />
            <InfoComp title ='- Atendimento ao cliente' />
            <InfoComp title ='- Instalação e atualização de programas via remoto' />

            <SubtituloComp title = 'TÉCNICO DE INFORMATICA' />
            <Subtitulo2Comp title ='DENOIR' />
            <DataComp title = '2005-2006' />
            <InfoComp title='- Responsável pelos serviços gerais de informática' />
            <InfoComp title='- Instalação e configuração da rede na empresa' />

            <TituloComp title = 'Histórico Acadêmico' />
            <Subtitulo2Comp title ='- StackX - Dev Full StackX - 2021' />
            <Subtitulo2Comp title ='- Graduação em Biologia Incompleto - Unip - 2008-2011' />
            <Subtitulo2Comp title ='- Técnico em Processamento de Dados - Colégio Módulo/Fiap - 2001-2003' />



        </div>


    )

}

export default Trabalho
