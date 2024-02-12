import React from "react";
import "./Contact.css";


import "./Contact.css";
import { Component } from "react";


class Contact extends Component {
    render() {
        return (
            <>
                <h1 id="Contact" style={{ textAlign: "center", color: "#105652" }}>Contact</h1>
                <div className="contact-form">




                    <div className="contact-div1">
                        <h2>Let's connect</h2>
                        <p>
                            send me an email which will helps us to get connected for 
                            work related stuff 
                        </p>
                        <p> I am available at your service</p>
                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-envelope"></i>{" "}
                            wankarhimanshu9@gmail.com
                        </div>

                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-phone-alt"></i> +91 7083084622
                        </div>

                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-map-marker-alt"></i> karve Nagar Pune, 411052
                        </div>
                    </div>

                    <form action="#" name="contact" data-netlify="true">
                        <h2>Send me a message</h2>
                        <p>
                            <label>
                                First & Last Name * <input required type="text" name="name" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Phone number *<input required type="number" name="email" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Email *<input required type="email" name="email" />
                            </label>
                        </p>

                        <p>
                            <label>
                                Message *: <textarea required name="message"></textarea>
                            </label>
                        </p>
                        <p>
                            <button className="btn-form" type="submit">
                                Send Message
                            </button>
                        </p>
                    </form>
                </div>
                <div className="footer-area">

                    © 2024 Himanshu Wankar All rights reserved.
                </div>
            </>
        );
    }
}

export default Contact;
