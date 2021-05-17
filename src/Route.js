import React from "react";
import { Switch, Route} from "react-router-dom";
import Newcomponent from "./components/Newcomponent";
import About from "./layouts/about-us/About";
import ContactUs from "./layouts/contact-us/ContactUs";
import Home from "./layouts/home/Home";
import LogIn from "./layouts/log-in/LogIn";
import SignUp from "./layouts/SignUp/SignUp";


function Routing() {
  return (
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/New" component={Newcomponent}/> 
      <Route path="*" component={Home} />
    </Switch>
  );
}
export default Routing;