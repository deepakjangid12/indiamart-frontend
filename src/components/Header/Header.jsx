import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context, context } from "../../utils/context"


const Header = () => {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setshowSearch] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const {cartCount} = useContext(Context)
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (<>
        <header className={`main-header ${scrolled ? "sticky-header" : " "}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li>About</li>
                    <li>Catogries</li>
                </ul>
                <div  className="centre" onClick={()=>navigate("/")}>MART INDIA</div>
                <div className="right">
                    <TbSearch onClick={() => setshowSearch(true)} />
                    <AiOutlineHeart />
                    <span className="cart-icon" onClick={() => setShowCart(true)}>
                        <CgShoppingCart />
                       {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {/* or you can pass showcart true */}
        {showSearch && <Search setshowSearch={setshowSearch} />}
    </>
    )
};

export default Header;
