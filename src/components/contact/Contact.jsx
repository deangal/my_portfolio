import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Paper, TextField } from "@material-ui/core";
const Contact = () => {
  const [messageCheck, setMessageCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(message);

  const templateParams = {
    email: email,
    message: message,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageCheck(true);
    if (email.includes("@")) {
      emailjs
        .send(
          "service_2b17hv3",
          "template_cv25rbb",
          templateParams,
          "user_gCk5uccZhdmmyRzPTsiBv"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );

      e.target.reset();
    } else {
      // alert("Invalid email"); eng
      alert("אימייל לא תקיני");
    }
  };

  return (
    <div className="contact" id="contact">

      <div className="left">
        <h1>כתובת ###</h1>
          <div className="map_container">
          
          <div class="mapouter"><div class="gmap_canvas"><iframe  title="gmaps" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D7%A0%D7%94%D7%A8%D7%99%D7%94%20%D7%92%D7%A2%D7%AA%D7%95%D7%9F%201&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
     
         </div></div>

          </div>
        {/* <img src={contact} alt="" /> */}
      </div>

      <div className="right">
        <Paper
          elevation={16}
          className="paper"
          style={{
            padding: 10,
            overflow:'hidden',
            height: "65vh",
            width: 315,
            margin: "15px 15px",
          }}
        >
          {/* <h2>Contact</h2> eng*/}
          <h2>צור קשר</h2>
        
          <form onSubmit={handleSubmit}>
            <TextField
              InputLabelProps={{ className: "email" }}
              style={{ marginTop: "20px" }}
              // label="Email" eng
              label="אימייל"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              className="messagex"
              multiline={true}
              minRows="12"
              maxRows="12"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              InputLabelProps={{ className: "message" }}
              style={{ marginTop: "50px", marginBottom: "40px" }}
              // label="Message" eng
              label="הודעה"
              fullWidth
            />
            {/* <button type="submit">Send</button> eng */}
            <button type="submit">שלח</button>
            <br />
            {/* {messageCheck && <span>Thanks , Have a great day! </span>} eng*/}
            {messageCheck && <span>תודה רבה נחזור אליכם בהקדם!</span>}
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;

