import React from 'react'
import IsAdded from './IsAdded'

const Product = ({data,addToCart}) => {
    const maxLength = 16;
    const maxLengthtitle=20
  return (
    <div className="row">
    {data?.products.map((item, index) => (
      <div key={index}  className=" card  h-50 col-md-4 col-sm-12 p-3 border-dark border-5 my-2 rounded-4  ">
        <img
          height={400}
          src={item.image_url}
          className="card-img-top font-bold"
          alt="..."
        />
        <div className="card-body position-relative">
          <h5 className="card-title">
          {item.title.length > maxLengthtitle
              ? item.title.slice(0, maxLengthtitle) + "..."
              : item.title}</h5>
          <p className="card-text mb-5">
            {item.description.length > maxLength
              ? item.description.slice(0, maxLength) + "..."
              : item.description}
          </p>
          <div className="text-center mb-5 pb-2">
          <h3 >цена:{item.price}₽</h3>
          </div>
          <IsAdded
            name={item.title}
            price={item.price}
            onAddToCart={addToCart}
            id={item.id}
          />
        </div>
      </div>
      
    ))}
  </div>
  )
}

export default Product
