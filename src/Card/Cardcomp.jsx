import React from 'react'

export default function Cardcomp(props) {
    let {image,title,description,category,price,rating} = props
  return (
    <div className="pro-card">
              <img src={image} alt="" />
              <h2>{title}</h2>
              <h3>{description}</h3>
              <p>{category}</p>
              <h1>${price}</h1>
              <h3>⭐ ⭐ ⭐ ⭐{rating}</h3>
            </div>
  )
}
