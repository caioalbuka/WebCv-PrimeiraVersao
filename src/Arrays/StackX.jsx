import './style.css'

const list = [
    'Python Basico',
    'Soft Skills',
]

const StackX = ({ info }) => {
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
        return <StackX info={item} />
      })}
    </div>
  );
}