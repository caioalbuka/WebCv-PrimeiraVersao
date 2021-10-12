import './style.css'

const list = [
    'Trabalho em grupo',
    'Comunicação',
    'Foco',
    'Raciocínio lógico',
]

const Habilidades = ({ info }) => {
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
        return <Habilidades info={item} />
      })}
    </div>
  );
}