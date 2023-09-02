import "./SingleProduct.scss";
import { useState ,useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus, } from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-2.webp"
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const { id } = useParams();
    const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const[quantity,setQuantity]=useState(1);
    const { handleAddToCart }=useContext(Context);

    const increment=()=>{
        setQuantity((prevState)=> prevState +1);
    }
    const decrement=()=>{
        if(quantity > 1){
        setQuantity((prevState)=> prevState -1);
        }
        else{
            setQuantity(1)
        }
    }

    if(!data) return;
    const product = data.data[0].attributes;
    return (
        <div className="single-product-main-content">
            {/* used for centre div layout */}
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_app_DEV_URL + product.img.data[0].attributes.url} alt="singleprod" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-button">
                            <div className="quantity-button">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>

                            <button className="add-to-cart-button"  onClick={() => {handleAddToCart(data.data[0], quantity);
                            setQuantity(1);
                            }}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* related products */}
                <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
