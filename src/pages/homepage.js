import logo from "../images/mullaneyDevLogo.png";

const Home = () => {
  return (
    <div className="welcomeBox">
      <img src={logo} alt="Mullaneydev Logo" className="logoIMG" />
      <h1>Welcome</h1>
      <p>
        Thank you for visiting my website. Here you will find more about who I
        am, why I became a developer and examples of projects I have completed
      </p>
      <p>
        For contact information and social profiles please visit the contact
        page
      </p>
    </div>
  );
};

export default Home;
