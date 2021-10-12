import './style.css'

const list = [
    'React',
    'Html-Css',
    'Git e Github',
    'JavaScript',
    'Linux',
    
]

const HabilidadesPro = ({ info }) => {
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
        return <HabilidadesPro info={item} />
      })}
    </div>
  );
}