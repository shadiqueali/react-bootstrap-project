import React from "react";

function Contact() {
    return (
        <div>
            <section className="bg-info py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Contact / About Us</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="" className="mb-1">
                                            Full Name
                                        </label>
                                        <input type="text" placeholder="enter full name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="mb-1">
                                            Phone Number
                                        </label>
                                        <input type="text" placeholder="enter phone number" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="mb-1">
                                            Email
                                        </label>
                                        <input type="text" placeholder="enter email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="mb-1">
                                            Message
                                        </label>
                                        <textarea name="" id="" cols="10" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100 ">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h6 className="main-heading">Address Information</h6>
                                    <div className="under-line"></div>

                                    <p>B64 Bangloore Karnataka, India</p>

                                    <p>+91-xxxxxxx</p>

                                    <p>+91-xxxxxxx</p>

                                    <p>email@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
