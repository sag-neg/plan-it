import Button from '../../components/commons/button/Button';
import EmailUserInput from '../../components/commons/email-input/EmailUserInput';
import Section from '../../components/commons/section/Section';
import FeatureSection from '../../components/featureSection/Feature_Section';
import SubFooter from '../../components/sub-footer/SubFooter';
import './style.css';

const Home = () => {
    return (
        <>
            <div className="homepage_item_contanier">
                <div className="left_section">
                    <h1>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>
                    <div className="email_user_input">
                        <EmailUserInput />
                        <Button />
                    </div>
                </div>
                <div className="right_section">
                    <a>
                        <img className="home_image" src="./images/home.jpg" alt="logo" /></a>

                </div>

            </div>
            <h1>How It Works</h1>
            <div className="working_Steps">
                <Section />
                <Section />
                <Section />
            </div>
            <div className="feature_section">
                <h1>Features that everyone will enjoy</h1>
                <div className="feature_section_items">
                    <a href="/">
                        <img className="feature_section_image" src="./images/featureSection1.jpg" alt="logo" /></a>
                </div >
                <div className="feature_section_card">
                    <FeatureSection />
                    <FeatureSection />

                    <FeatureSection />

                </div>
                <div className="feature_section_card">
                    <FeatureSection />
                    <FeatureSection />

                    <FeatureSection />

                </div>
            </div>

            <div className="user_email_section">
                <h2>Get started for free today</h2>
                <div className="email_user_input">
                    <EmailUserInput />
                    <Button />
                </div>
            </div>
            <SubFooter />
        </>
    );
}

export default Home;
