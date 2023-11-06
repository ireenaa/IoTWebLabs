import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <h2 className='item-name'>{props.name}</h2>
        <p className='item-prices'>{props.price}$</p>

    </div>
  )
}

export default Item