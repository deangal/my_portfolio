import './contact.scss'
import contact from '../../assets/contact.jpg'
import { useState } from 'react';
import emailjs from 'emailjs-com'
import { Paper, TextField } from '@material-ui/core'
const Contact = () => {
    const [messageCheck,setMessageCheck] = useState(false)
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    console.log(message);

    const templateParams = {
        email: email,
        message: message
    };
    
  

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessageCheck(true)
        if(email.includes('@')){
            emailjs.send('service_2b17hv3','template_cv25rbb', templateParams,'user_gCk5uccZhdmmyRzPTsiBv')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
               console.log('FAILED...', err);
            });
    
            e.target.reset()
        }else {
            alert('Invalid email')
        }
        } 
        
    return (
        
        <div className='contact' id='contact'>
            <div className="left">
                <img src={contact} alt="" />
            </div>
            <div className="right">
                  <Paper  elevation={16} className='paper' style={{padding:10 ,height:'65vh' ,width:315, margin:'15px 15px'}}>
                      
                      <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                      <TextField InputLabelProps={{className:'email'}} style={{marginTop:'20px'}} label='Email' onChange={(e) => setEmail(e.target.value) } fullWidth  />
                      <TextField className='messagex' multiline={true} minRows='12' maxRows='12' variant="outlined" onChange={(e) => setMessage(e.target.value) } InputLabelProps={{className:'message'}} style={{marginTop:'50px', marginBottom:'40px'}}  label='Message' fullWidth  />
                       <button type='submit'>Send</button><br />
                       {messageCheck && <span>Thanks , Have a great day! </span>}
                       </form>
                  </Paper>
                
              
              
            </div>
        </div>
    );
};

export default Contact;
{/* <h2>Contact Me</h2>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Email" name="email"/>
    <textarea placeholder="Message" name="message"></textarea>
    <button type='submit'>Send</button>
    {message && <span>Thanks , Have a great day! </span>}
</form> */}