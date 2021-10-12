import './style.css'

const list = [
  'Introdução ao Git e Github',
  'Introdução a criação de websites com HTML e CSS3',
  'Programação para internet com JAVAScript',
]

const Dio = ({ info }) => {
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
        return <Dio info={item} />
      })}
    </div>
  );
}

