import github from "../images/github.png";
import twitter from "../images/twitter.png";
import mail from "../images/mail.jpg";
import linkedin from "../images/linkedin.png";

const Contact = () => {
  return (
    <>
      <div className="contactBox">
        <div className="contactDetails">
          <h3>
            Please follow the links to view my profiles and connect with me via
            email
          </h3>
        </div>
        <a
          href="https://github.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <img src={github} className="contact-style" alt="GitHub Logo" />
        </a>
        <a
          href="https://twitter.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <img src={twitter} className="contact-style" alt="Twitter logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-mullaney-60485028a/"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <img src={linkedin} className="contact-style" alt="LinkedIn" />
        </a>
        <a href="mailto:matt.mullaney@live.co.uk" className="contactLink">
          <img src={mail} className="contact-style" alt="Email icon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
