import "./CartItem.scss";
import { useContext } from "react";
import { MdClose } from "react-icons/md"
import { Context } from "../../../utils/context";
import prod from "../../../assets/products/earbuds-prod-5.webp"
const CartItem = () => {
    const{cartItems , handleCartProductQuantity , handleRemoveFromCart}= useContext(Context)
    return (
        <div className="cart-products">
                {cartItems.map(item=>(
            <div key={item.id} className="cart-product">
{/*                 <div className="img-container">
                    <img src={process.env.REACT_app_DEV_URL + item.attributes.img.data[0].attributes.url} alt="cartitemimg" />   
                </div> */}
                 <div className="img-container">
                        <img src={item.attributes.img.data[0].attributes.url} alt="cartitemimg" />
                    </div>
                <div className="prod-details">
                    <span className="Product name">{item.attributes.title}</span>
                    <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)} />
                    <div className="quantity-button">
                        <span onClick={()=>handleCartProductQuantity('dec' ,item)}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span  onClick={()=>handleCartProductQuantity('inc' ,item)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span  className="hignlight">&#8377;{item.attributes.price}</span>
                        {/* * item.attributes.quantit */}
                    </div>
                </div>
            </div>
                    ))}
        </div>
    )
};

export default CartItem;
