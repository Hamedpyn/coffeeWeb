import Link from 'next/link'
import React from 'react'

export default function Card({title,price,img,desc,id}) {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt="" />
        <h5 className="menu-price">${price}</h5>
      </div>
      <div className="col-8 col-sm-9">
      <Link href={`/product/${id}`}>
        <h4>{title}</h4>

      </Link>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  )
}
