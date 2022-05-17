

const Content = () => {
  const handleNameChange = () => {
    const names = ["Gary", "Kelli", "Bill", "Sara"]
    const itm = Math.floor(Math.random() * 3)
    return names[itm]
  } 
  
  const handleClick = () => {
    console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e)
  }

  return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Kelli')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content