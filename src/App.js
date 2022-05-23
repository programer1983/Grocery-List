import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import {useState, useEffect} from  "react"
import SearchItem from './SearchItem';

function App() {
  const API_URL = 'http://localhost:3500/itemss'
  
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not recevie expected data')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (err){
        setFetchError(err.message)
      }
    }
    fetchItems()
  }, [])


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {
      id,
      checked: false,
      item
    }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleChack = (id) => {
    const listItems = items.map((item) => item.id === id 
    ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }

  
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
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
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && <Content  
            items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))} 
            handleChack={handleChack}
            handleDelete={handleDelete}
          />
        }
      </main>
     <Footer length={items.length} />
    </div>
  );
}

export default App;
