import "./Footer.scss";
import React from "react";
import{ FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">onsectetur adipisicing elit. Consequatur quibusdam aut neque earum praesentium,  sequi omnis officiis pariatur voluptate.
                    </div>
                </div>


                <div className="col">
                    <div className="title">contact</div>
                    <div className="c-item">
                    <FaLocationArrow />
                    <div className="text"> r-349, p-vihar ,delhi ,110041.</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text"> Phone: 0012 573 4286</div>
                </div>
                <div className="c-item">  
                    <FaEnvelope/>
                    <div className="text"> Email:storeInd@svj.com</div>
                </div>
                </div>


                <div className="col">
                    <div className="title">catgories</div> 
                    <span className="text">Headphone</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text"> Wirelwss Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text"> Projectors</span>
                </div>

                <div className="col">
                    <div className="title">pages</div>
                    <span className="text">Home</span
                    ><span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text"> Terms & conditios</span>
                    <span className="text"> contact us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        MARTINDIA 2023 CREATED BY DEEPAK .PREMIUM E-COMMERCE STORE.
                    </div>
                    <img src={payment} alt="payment" />
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
