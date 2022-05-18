import ItemList from "./ItemList"

const Content = ({items, handleChack, handleDelete}) => {
  
  return (
    <main>
      {items.length ? (
        <ItemList 
          items={items} 
          handleChack={handleChack} 
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{marginTop: '2rem', color: 'green'}}>Your List is Empty!</p>
      )} 
    </main>
  )
}

export default Content