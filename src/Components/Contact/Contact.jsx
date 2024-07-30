import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cf977c60-c0b5-4125-a8d1-a8bf81db6e13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }; 


    return (
    <div className='contact'>
      <div className="contact-col">
      
        <ul>
          <li><img src={mail_icon} alt="Email Icon" />info@iba.edu.pk</li>
          <li><img src={phone_icon} alt="Phone Icon" />+92-(21) 3810-4700</li>
          <li><img src={location_icon} alt="Location Icon" />University Road, Karachi - 75270 Pakistan</li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57886.88894845491!2d67.12966169323728!3d24.934435413421532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bcd01921f5%3A0x5fd98736c5530784!2sInstitute%20of%20Business%20Administration%2C%20Karachi!5e0!3m2!1sen!2sus!4v1722295816717!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0, marginTop: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-col">
      <h3>Send us a message</h3>
      {/* <p>We are here to assist you with any inquiries regarding admissions, programs, and services. Reach out to our team for prompt support and information. Your future starts with us!</p> */}

        <form  onSubmit={onSubmit} className='formh'>
            <label>Name </label>
            <input type='text' name='name' placeholder='Enter Your Name'  required/>
            <label> Phone number </label>
            <input type='tel' name='phone' placeholder='Enter Your Number'  required/>
            <label> Write your message here </label>
            <textarea name="message" rows="6" placeholder='Enter Your Message'required ></textarea>
        <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
<span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
