import './contact.scss'
import contact from '../../assets/contact.jpg'
import { useState } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)

        emailjs.sendForm('service_2b17hv3', 'template_cv25rbb', e.target, 'user_gCk5uccZhdmmyRzPTsiBv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={contact} alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks , Have a great day! </span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;