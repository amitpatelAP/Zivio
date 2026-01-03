import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="page-header" className="about-header">
                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>
            </section>

            <section id="contact-details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i className="fa-solid fa-map"></i>
                            <p>KIIT, Patia, Bhubaneswar, Odisha</p>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <p>mansisharmakr1086@gmail.com</p>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <p>+91-0000000042</p>
                        </li>
                        <li>
                            <i className="far fa-clock"></i>
                            <p>Monday to Saturday: 9.00am to 16.pm</p>
                        </li>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7182268228944!2d85.82663990000002!3d20.353255899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093fdc5e9925%3A0xd762dce50904e0ef!2sKIIT%20Chowk%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1743796480057!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We Love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button className="normal">Submit</button>
                </form>
            </section>
        </>
    );
};

export default Contact;
