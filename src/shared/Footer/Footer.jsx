import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nb9eguq', 'template_493igfq', form.current, 'RWJW4CP8tg4tD2IYQ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section id="contact">
            
            <h2 className="text-3xl ">Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option_icon"/>
                        <h4>Email</h4>
                        <h5>mdabdurrouf.likhon@gmail.com</h5>
                        <a href="mailto:mdabdurrouf.likhon@gmail.com" target="_blank" >Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className="contact_option_icon"/>
                        <h4>Messenger</h4>
                        <h5>Md Abdur Rouf Likhon</h5>
                        <a href="https://m.me/abdurrouf.likhon" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <FaWhatsappSquare className="contact_option_icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+8801743586381</h5>
                        <a href="#contact">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email address" required />
                    <textarea name="message" rows="7"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;