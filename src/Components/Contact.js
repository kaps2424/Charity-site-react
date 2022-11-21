import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, fas , faAddressCard, faAddressBook, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab, faCoffee, faAddressCard, faAddressBook, faHouse, faUsers)


const Contact = () => {
    return (
        <div >
    

            <section className="contact">
            <div className="contact-center">
                <article className="contact-info">
                   <div className="contact-detail">
                    <div className="contact-icon">
                    <FontAwesomeIcon icon=" fa-address-card" />
                    
                    </div>
                    <div className="contact-text">
                    <h3>Find us here:</h3>
                    <p>123 City Street</p>
                    <p>State, Country</p>
                    <p>Zip code</p>
                    </div>
                   </div> 
                   <div className="contact-detail">
                    <div className="contact-icon">
                    <FontAwesomeIcon icon="fa-solid fa-house" size="60x" />
                    </div>
                    <div className="contact-text">
                    <h3>Please feel free to contact us at:</h3>
                    <p>Telephone: 555 555 5555</p>
                    <p>Cell: 555 555 5555</p>
                    <p>Email: baguvix@gmail.com</p>
                    <p>mon - fri, 8.00 - 16.30 </p>
                    </div>
                   </div> 

                <section id="team">
                    <div className= "title">
                        <div className="title-icon">
                            <FontAwesomeIcon icon="fa-solid fa-users" size="60x" />
                        </div>
                        <div className="title-text">
                            <h2 className="title-heading">Meet our team</h2>
                            <p className="title-subheading">These are our beloved founders who made all this possible</p>
                        </div>
                    </div>

                    <div id="team-center">
                        <article className="team-member">
                        <img src={require('./images/director1.jpg')} alt="first 1" />
                            <h2>John Dent</h2>
                            <h5>Director</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <div className="team-member-footer">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                        </article>
                        <article className="team-member">
                        <img src={require('./images/director2.jpg')} alt="mid 2"/>
                            <h2>Rita Foster</h2>
                            <h5>Finance manager</h5>
                            <hr/> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <div className="team-member-footer">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                        </article>
                        <article className="team-member">
                        <img src={require('./images/director3.jpg')} alt="last 3" />
                            <h2>Kennith Daniels</h2>
                            <h5>Fund raising promoter</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <div className="team-member-footer">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                        </article>
                    </div>


                </section>


                </article>
                <div id="contact-us">
                <article className="contact-form">
                    <h3>Contact us</h3>
                    <form>
                        <input type="text" id="name" placeholder="first name"/>
                        <input type="text" id="last name" placeholder="last name"/>
                        <input type="email" id="email" placeholder="email address"/>
                        <textarea name="comments" id="comments" cols="30" rows="10" placeholder="your message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    
                </article>
                </div>
            </div>
            </section>
        </div>
        
    )
}

export default Contact