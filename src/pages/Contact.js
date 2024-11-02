import React, {useState } from 'react';
import PizzaLeft from "../assets/fooda.jpeg";
import "../styles/Contact.css";
import { db } from "./Firebase"

function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  var date = { currentTime: new Date().toLocaleString() };

  const Submit =  async (e) => {
    e.preventDefault();  
    //API - 
    db.collection("Messages").add({
      email: email,
      name:name,
      msg: msg,
      date:date.currentTime,
  });
    alert('Message sent successfully!');

}

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">

                    
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={name} onChange={e => setName(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={msg} onChange={e => setMsg(e.target.value)}
          ></textarea>
          <button onClick={Submit}> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
