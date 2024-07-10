import React from 'react'

const Item = ({thumbnail,title,category,price}) => {


  return (
    <div>
        <img src={thumbnail}  />
        <h3>{title}</h3>
        <p>{category}</p>
        <h2>{price}</h2>
        <button>buy</button>
    </div>
  )
}


export default Item;