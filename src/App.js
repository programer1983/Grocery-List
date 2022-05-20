import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import {useState} from  "react"

function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {
      id,
      checked: false,
      item
    }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleChack = (id) => {
    const listItems = items.map((item) => item.id === id 
    ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
     <Header title='Grocery List' />
     <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
     <Content  
        items={items} 
        handleChack={handleChack}
        handleDelete={handleDelete}
      />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
