import React from 'react'
import '../Components/contact.css'

const Contact = () => {
    return (
        <>
            <div className="container">
                <h1>Get in Touch</h1>
                <p>Fill up the form to get in touch with us. </p>

                {/* <!-- Contact form section --> */}
                <div className="contact-box">
                    {/* <!-- Left side of the form --> */}
                    <div className="container-left">
                        <h3>Fill the Form*</h3>
                        {/* <!-- Form --> */}
                        <form id="contactForm" method="post" action="https://nurseryspring.onrender.com/SendEnquiry">
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Name*</label>
                                    <input type="text" id="name" name='Name' placeholder="Enter your Name" required />
                                </div>

                                <div className="input-group">
                                    <label>Phone*</label>
                                    <input type="number" id="phone" name='PhoneNumber' placeholder="+91 1234567890" required />
                                </div>
                            </div>

                            {/* <!-- Input row for Email and Subject --> */}
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Email*</label>
                                    <input type="email" id="email" name='Email' placeholder="youremail@gmail.com" required />
                                </div>

                                <div className="input-group">
                                    <label>Subject</label>
                                    <input type="text" id="subject" name='Subject' placeholder="Inquiry" />
                                </div>
                            </div>

                            {/* <!-- Label for Message textarea --> */}
                            <label>Message*</label>
                            <textarea rows="10" id="message" name='Message' placeholder="Enter your Message" required></textarea>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                    {/* <!-- Right side with contact information --> */}
                    <div className="container-right">
                        <h3>Reach Us</h3>
                        {/* <!-- Table for contact information --> */}

                        <table>
                            <tr>
                                <td>Email: </td>
                                <td>contact@msijanakpuri.com</td>
                            </tr>

                            <tr>
                                <td>Phone: </td>
                                <td>+91 011-45656183</td>
                            </tr>

                            <tr>
                                <td>Address: </td>
                                <td>Maharaja Surajmail Institute <br />
                                    C-4, Janakpuri, <br />
                                    Delhi - 110058, India</td>
                            </tr>
                        </table>

                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62195.316569132614!2d80.19866420000001!3d13.02246795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744960310615!5m2!1sen!2sin" 
                            width={600} 
                            height={400} 
                            // style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
