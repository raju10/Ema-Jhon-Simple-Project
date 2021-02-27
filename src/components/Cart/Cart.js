import React from 'react';

const Cart = (props) => {  
    const cart = props.cart
    console.log(cart)

   // const total = cart.reduce( (total , prd) => total + prd.price , 0)
// total price
let total = 0;
for(let i= 0; i < cart.length; i++){
    const product = cart[i];
    total = Math.round(total + product.price) 
}
//shipping cost
  let shipping = 0;
  if(total > 35){
      shipping = 0;
  }
  else if(total > 15){
      shipping = 4.59
  }
  else if (total > 0){
      shipping = 12.22
  }
  // tax
  const tax = (total/10).toFixed(2);
  
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Orderd : {cart.length} </p>
            <p>Product Price : {total} $ </p>
            <p>Shipping Cost : {shipping} $</p>
            <p>Tax / Vat : {tax} $</p>
            <p> Total Price (shipping cost + tax) : {total + shipping + Number(tax)} $</p>
        </div>
    );
};

export default Cart;