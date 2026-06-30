import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <section id="page-header" className="about-header">
                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>
            </section>

            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                            <td><img src="/imgs/img/product2.webp" alt="" /></td>
                            <td>Summer Plus Size T-Shirt</td>
                            <td>₹15</td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>₹15</td>
                        </tr>
                        <tr>
                            <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                            <td><img src="/imgs/img/shop_product5.jpg" alt="" /></td>
                            <td>Printed T-Shirt</td>
                            <td>₹0.87</td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>₹0.87</td>
                        </tr>
                        <tr>
                            <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                            <td><img src="/imgs/img/arrival8.webp" alt="" /></td>
                            <td>Magnetic Keychain</td>
                            <td>₹6</td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>₹6</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Table</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>₹21.87</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>₹21.87</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="">Proceed to Checkout</button>
                </div>
            </section>
        </>
    );
};

export default Cart;
