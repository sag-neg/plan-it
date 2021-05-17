import { Link } from "react-router-dom";
import Button from "../../components/commons/button/Button";
import EmailUserInput from "../../components/commons/email-input/EmailUserInput";
import "./SignUp.css"

const SignUp = ()=>{

    return(
        
        <div className= "container">
            <div className="section">
               <div>
            <img className="login_logo" src="../images/logo.png" alt="logo" />
            </div>
        <div className="sub_section_section">
            <h4>Sign up with plan-it for free</h4>
            <div className="signUp-container">
            
        <EmailUserInput/>
          <Button/>       
          <p> Already have an account?<Link to="/logIn" > <a className="logIn_link">Log in.</a></Link></p>
            </div>

        </div>
        </div>
        </div>
        
    );
}
export default SignUp;