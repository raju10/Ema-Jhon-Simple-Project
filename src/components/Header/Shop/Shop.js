import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Products from '../../Products/Products';
import './Shop.css'
const Shop = () => { 
    const first10 = fakeData.slice(0,10);
   const [products,setProducts] = useState(first10);

   const [cart,setCart] = useState([])
  
        
   const handelAddProduct = (productss) =>{
        const newCart = [...cart,productss];     
        setCart(newCart)

        //console.log(newCart);
   } 
    return (
        <div className="shop-container">
            <div className="products-container">
                         
                  {
                     products.map(pro =><Products handelAddProduct={handelAddProduct}  product={pro}></Products>)
                   }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
           
        </div>
    );
};

export default Shop;