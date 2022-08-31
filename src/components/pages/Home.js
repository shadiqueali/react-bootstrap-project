import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import service from "../images/serrvice.jpg";
import Vission from "./Vission";

function Home() {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-heading">Our Company</h1>
                            <div className="under-line mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis quis rerum quia
                                earum alias ipsum ullam. Non veniam harum commodi dicta consequuntur ea in odio ratione
                                odit, iure pariatur?
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Vission/>

            <section className="section  border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h1 className="main-heading">Our Services</h1>
                            <div className="under-line mx-auto"></div>
                        </div>

                        <div className="col-md-4 text-center pt-2">
                            <div className="card shadow">
                                <img src={service} alt="services" className="border-bottom w-100" />
                                <div className="card-body">
                                    <h6>Service-1</h6>
                                    <div className="under-line mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo animi?
                                        Sequi, rerum, soluta possimus quam quidem, eos dolores voluptas vitae aperiam
                                        asperiores veritatis tempora dolor pariatur cupiditate atque magnam!
                                    </p>
                                    <Link to='services' className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center pt-2">
                            <div className="card shadow">
                                <img src={service} alt="services" className="border-bottom w-100" />
                                <div className="card-body">
                                    <h6>Service-2</h6>
                                    <div className="under-line mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo animi?
                                        Sequi, rerum, soluta possimus quam quidem, eos dolores voluptas vitae aperiam
                                        asperiores veritatis tempora dolor pariatur cupiditate atque magnam!
                                    </p>
                                    <Link to='services' className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center pt-2">
                            <div className="card shadow">
                                <img src={service} alt="services" className="border-bottom w-100" />
                                <div className="card-body">
                                    <h6>Service-3</h6>
                                    <div className="under-line mx-auto"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo animi?
                                        Sequi, rerum, soluta possimus quam quidem, eos dolores voluptas vitae aperiam
                                        asperiores veritatis tempora dolor pariatur cupiditate atque magnam!
                                    </p>
                                    <Link to='services' className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
