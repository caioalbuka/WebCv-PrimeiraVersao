import './style.css'

const list = [
    'StackX - Dev Full StackX - 2021',
    'Graduação em Biologia Incompleto - Unip - 2008-2011',
    'Técnico em Processamento de Dados - Colégio Módulo/Fiap - 2001-2003',
]

const Historico = ({ info }) => {
  console.log(info)
  return (
    <div>
      <div>- {info}</div>
    </div>
  )
}

export default function Info() {
  return (
    <div className="Info">
      {list.map(item => {
        return <Historico info={item} />
      })}
    </div>
  );
}