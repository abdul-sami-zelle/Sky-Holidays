import React from "react";
import './index.css';
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import youtube from "../../assets/youtube.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="sectionTop_footer">
                <div className="sectionTop_footer_1">
                    <span className="heading">
                        Support
                    </span>
                    <a href="">Help Center</a>
                    <a href="">Our Covid-19 Response</a>
                    <a href="">Cancellation Options</a>
                    <a href="">Safety Information</a>
                </div>
                <div className="sectionTop_footer_1">
                    <span className="heading">
                        Company
                    </span>
                    <a href="">About Us</a>
                    <a href="">Community Blogs</a>
                    <a href="">Careers</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms or Conditions</a>
                </div>
                <div className="sectionTop_footer_1">
                    <span className="heading">
                        Contact
                    </span>
                    <a href="">Partnerships</a>
                    <a href="">FAQs</a>
                    <a href="">Get in Touch</a>
                </div>
                <div className="sectionTop_footer_1">
                    <span className="heading">
                        Social
                    </span>
                   <div className="social">
                   <a href=""><img src={fb} alt="" srcset="" /></a>
                    <a href=""><img src={insta} alt="" srcset="" /></a>
                    <a href=""><img src={youtube} alt="" srcset="" /></a>
                   </div>
                </div>
            </div>
            <div className="sectionBottom_footer">
                <span>© Copyright Sky Holidays Pakistan. Designed & Managed By Zelle Solutions</span>
            </div>
        </div>
    )
}