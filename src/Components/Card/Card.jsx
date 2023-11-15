import React from 'react';
import './Card.css'
const Card = ({title,img,condition,shipping,price}) => {
    // console.log(producto)

    console.log(title)
    // console.log(props)
    // console.log(props.producto)
    // console.log(props.producto.title)
    // console.log(props.productoDos.title)
    return(
        <div className='container-card'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6>{title}</h6>
                <p>Condicion: {condition}</p>
                <p>Precio:$ {price}</p>

                {/* <p> {shipping ?"Envio gratis":"Sin envio gratis"}</p> */}
                {shipping && <p className='free-shipping'>Free Shipping</p>}
            </div>

        </div>
    )
}

export { Card }