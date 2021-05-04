import './ContactUs.css'
const ContactUs = () => {

    return (
        <div className="contact_us_container">
            <h2 >Contact Us</h2>
                <div className= "contact_form"> 
                
                <form className="contact_us_form"> 
                <input className="input" type="text" name="name" id="name" placeholder="Enter your name" required/>
                <input className="input" type="email" name="email" id="email" placeholder="Enter your E-mail" required/>
                <input className="input" type="number" placeholder="Enter your Number"/>
                <textarea className="text" type="text" placeholder="write a message"/>
                
                <input className="input_button" type="submit" value="Sign Up" /> 
                </form>
                
                </div>
                <p>contact us on - <a href="">planit123@xyz.com</a></p>


        </div>
    );
}
export default ContactUs;