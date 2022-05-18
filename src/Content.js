import {FaTrashAlt} from "react-icons/fa"

const Content = ({items, handleChack, handleDelete}) => {
  
  return (
    <main>
      {items.length ? (
        <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
               type="checkbox"
               checked={item.checked}
               onChange={() => handleChack(item.id)}
            />
            <label
               style={item.checked ? {textDecoration: 'line-through'} : null}
               onDoubleClick={() => handleChack(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
      ) : (
        <p style={{marginTop: '2rem', color: 'green'}}>Your List is Empty!</p>
      )} 
    </main>
  )
}

export default Content