import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from 'emailjs-com'
import data from './emaildata.js'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(data.SERVICE_ID, data.TEMPLATE_ID, form.current, data.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text + ' ' + data.PUBLIC_KEY);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="container__options">
          <article className="contact__option">
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>danishshah1712@gmail.com</h5>
            <a href="mailto:danishshah1712@gmail.com" target="_blank" rel='noopener'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+6012-363 1097</h5>
            <a href="https://api.whatsapp.com/send?phone=60123631097" target="_blank" rel='noopener'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact