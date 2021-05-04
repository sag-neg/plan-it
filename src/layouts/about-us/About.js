import './About.css'
const About = () => {

    return (
        <div className="about_container">
            <div className="about_left_section">

                <img className="about_image" src="./images/about_image.jpg" alt="logo" />
            </div>
            <div className="about_right_section">
                <h1>About Us</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.<a href="">read more</a></p>
            </div>


        </div>
    );
}
export default About;