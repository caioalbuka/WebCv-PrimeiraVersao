import './style.css'

const list = [
     'Pacote Office',
     'Flash 5.0',
     'HTML - Intermediário',
 ]

const NewH = ({ info }) => {
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
        return <NewH info={item} />
      })}
    </div>
  );
}