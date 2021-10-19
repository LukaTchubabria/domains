import React from 'react'
import './cart.scss'

const Cart = (props) => {

    return (
        <div style={props.openCart ? {display: "block"} : {display: "none"}} className="cart">
            {props.cartList.length === 0
                ? <p>კალათი ცარიელია</p> 
                : props.cartList.map((list, id)=> (
                    <div key={id} className="cart__list">
                        <p>დომენი: {list.domainName}{list.domainExtension}</p>
                        <p>ფასი: {list.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
