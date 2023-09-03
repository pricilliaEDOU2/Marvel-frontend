import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <p className="open-sans ">
        Made by
        <Link to="https://github.com/">
          <span> Pricillia EDOU EDOU</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
