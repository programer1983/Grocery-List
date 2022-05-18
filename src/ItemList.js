import LineItem from "./lineItem"

const ItemList = ({items, handleChack, handleDelete}) => {
  return (
    <ul>
    {items.map((item) => (
      <LineItem
         key={item.id}
         item={item}
         handleChack={handleChack} 
         handleDelete={handleDelete}
      />
    ))}
  </ul>
  )
}

export default ItemList