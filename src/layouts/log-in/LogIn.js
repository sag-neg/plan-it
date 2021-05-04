import Button from "../../components/commons/button/Button";
import EmailUserInput from "../../components/commons/email-input/EmailUserInput";
import './LogIn.css'
const LogIn = () => {
    return (
        <div className="login_container">
            <div className="login_section">
                <div>
                    <img className="login_logo_image" src="../images/logo.png" alt="logo" />
                </div>
                <div className="login_sub_section_section">
                    <h4>Log-In with plan-it for free</h4>
                    <div className="login-container">
                        <EmailUserInput />
                        <input className="password_input" type="password" name="password" id="email" placeholder="Enter your password" required></input>
                        <Button />
                        <p> Create a new account? <a className="signIn_link" href="/signup">SignUp</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LogIn;