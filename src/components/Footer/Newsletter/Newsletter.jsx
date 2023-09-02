import "./Newsletter.scss";
import React from "react";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa"

const Newsletter = () => {
    return (
    <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">NewsLetter</span>
            <span className="big-text">Sign up for latest updates and offers</span>

            <div className="form">
                <input type="text"  placeholder="Email Adress"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our privacy policy</div>

            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF/>
                </div>
                <div className="icon">
                <FaTwitter/>
                </div>
                <div className="icon">
                <FaInstagram/>
                </div>
                <div className="icon">
                <FaLinkedinIn/>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Newsletter;
