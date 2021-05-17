import './style.css';
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="navigation_bar">

      <div className="navigation_bar_items">
        <header>
          <nav>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contactUs">Contact us</Link></li>
              <li><Link to="/new">New</Link></li>
              <li><Link to="/signUp" ><input className="navbar_submit_button" type="submit" value="Sign Up">

              </input></Link></li>
              <li><Link to="/logIn">Log In</Link></li>
            </ul>
          </nav>
        </header>
      </div>
      <div >
        <Link to="/">
          <img className="logo_image" src="./images/logo.png" alt="logo" /></Link>
      </div>
    </div>
  );
}

export default Navigation;
