import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {
    // console.log(props)

    const {img,name,seller,price,stock} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
               <h3>{name}</h3>
              
               <p><small>by : {seller}</small></p>
               <p>${price}</p>
               <br/>
               <p>Only {stock} left in stock - Order soon</p>
               <button onClick={()=>props.handelAddProduct(props.product)} className="main-button">  <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
           
           
        </div>
    );
};

export default Products;