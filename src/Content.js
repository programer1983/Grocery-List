import {useState} from "react"

const Content = () => {
  const [name, setName] = useState('Kelli')
  const [count, setCount] = useState(0)


  const handleNameChange = () => {
    const names = ["Gary", "Kelli", "Bill", "Sara"]
    const itm = Math.floor(Math.random() * 4)
    setName(names[itm])
  } 
  
  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }

  const handleClick2 = () => {
    console.log(count)
  }


  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  )
}

export default Content