import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <section id="page-header" className="blog-header">
                <h2>#ReadMore</h2>
                <p>Experience the impact – Dive into case studies!</p>
            </section>

            <section id="blog">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/imgs/img/blog_1.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                        <p>Kickstarter man braid godard coloring book, Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                        <Link to="#">CONTINUE READING ------</Link>
                    </div>
                    <h1>29/03</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/imgs/img/blog_2.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>How to Style a Outfit</h4>
                        <p>Kickstarter man braid godard coloring book, Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                        <Link to="#">CONTINUE READING ------</Link>
                    </div>
                    <h1>13/02</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/imgs/img/blog_3.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Must-have Skater Girls items</h4>
                        <p>Kickstarter man braid godard coloring book, Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                        <Link to="#">CONTINUE READING ------</Link>
                    </div>
                    <h1>20/02</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/imgs/img/blog_4.avif" alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Runway-Inspired Trends</h4>
                        <p>Kickstarter man braid godard coloring book, Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                        <Link to="#">CONTINUE READING ------</Link>
                    </div>
                    <h1>22/03</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/imgs/img/blog_5.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>AW20 Menswear Trends</h4>
                        <p>Kickstarter man braid godard coloring book, Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                        <Link to="#">CONTINUE READING ------</Link>
                    </div>
                    <h1>10/02</h1>
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
            </section>
        </>
    );
};

export default Blog;
