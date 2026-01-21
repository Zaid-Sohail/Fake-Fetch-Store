import React from 'react'

export default function Cardcomp(props) {
    let {img,title,desc,cate,price,rate} = props
  return (
    <div className="pro-card">
              <h2>{title}</h2>
              <img src={img} alt="" />
              <h4>{cate}</h4>
              <p>{desc.slice(0,200)}...</p>
              <h2>{rate}⭐⭐⭐⭐</h2>
              <h1>${price}</h1>
              
            </div>
  )
}
