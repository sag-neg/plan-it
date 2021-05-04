import './style.css';

function Footer() {
  return (
    <footer>
    <div className="copyright">
      <p><strong>© 2021 plan-it</strong></p>
      <div className="copyright_content">
           <p>We take the work out of connecting with others so you can accomplish more</p>
      </div>
    
    </div>
    <div className="privacy">
      <a href='/'>privacy</a>
      <div className="term">
           <a href="/" >Term</a>
      </div>
    </div>
    
    </footer>
  );
}

export default Footer;
