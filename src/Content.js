

const Content = () => {
  const handleNameChange = () => {
    const names = ["Gary", "Kelli", "Bill", "Sara"]
    const itm = Math.floor(Math.random() * 3)
    return names[itm]
  } 
  
  return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
    </main>
  )
}

export default Content