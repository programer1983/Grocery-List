import {FaTrashAlt} from "react-icons/fa"

const lineItem = ({item, handleChack, handleDelete}) => {
  return (
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
      <FaTrashAlt 
         onClick={() => handleDelete(item.id)} 
         role="button" 
         tabIndex="0"
         aria-label={`Delete ${item.item}`}
      />
  </li>
  )
}

export default lineItem