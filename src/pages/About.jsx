import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section id="page-header" className="about-header">
                <h2>#KnowUs</h2>
                <p>Your One-Stop Shop for Everything You Need!</p>
            </section>

            <section id="about-head" className="secction-p1">
                <img src="/imgs/img/about_shop.avif" alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Welcome to Zivio, your go-to destination for quality products at unbeatable prices. 
                    We are committed to providing a seamless online shopping experience with a wide range of products to meet your everyday needs. 
                    Our goal is to bring you the best deals, reliable service, and fast delivery right to your doorstep.
                    At Zivio, we believe in customer satisfaction and hassle-free shopping. Whether you're looking for the latest trends, essential items, 
                    or exclusive deals, we’ve got you covered. Shop with confidence, knowing that we prioritize quality, affordability, and convenience.
                    Join us on this journey and make shopping easier than ever!</p>
                    <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>

                    <br /><br />

                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Transforming online shopping into an effortless and enjoyable adventure, just for you.</marquee>
                </div>
            </section>

            <section id="about-app" className="section-p1">
                <h1>Download Our <Link to="#">App</Link></h1>
                <div className="video">
                    <video autoPlay muted loop src="/imgs/img/app_video.mp4"></video>
                </div>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="/imgs/img/Feature_shipping.jpg" alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_order.jpg" alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_money.avif" alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_promotion.avif" alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_Sell.avif" alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_Support.avif" alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>
        </>
    );
};

export default About;
