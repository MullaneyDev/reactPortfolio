import github from "../images/github.png";
import twitter from "../images/twitter.png";
import mail from "../images/mail.jpg";
import "../components/footer.css";

const Footer = () => {
  return (
    <div className="brandsig">
      <div className="brandsig-content-center">
        <div className="sig">
          <p>Website created by</p>
        </div>
        <div className="logo">
          <p>{"</> "}</p>
        </div>
        <div className="brand">
          <p>MullaneyDev</p>
        </div>
      </div>
      <div className="brandsig-content-right">
        <a
          href="https://github.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="icon-style" alt="GitHub Logo" />
        </a>
        <a
          href="https://twitter.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="icon-style" alt="Twitter logo" />
        </a>
        <a href="mailto:matt@mullaneydev.co.uk">
          <img src={mail} className="icon-style" alt="Email icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
