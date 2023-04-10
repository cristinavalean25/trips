import Img1 from "../Images/search_banner.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarLinks = () => {
  return (
    <div className="search-banner">
      <div className="col-md-12">
        <img className="img-responsive search-banner" alt="search-banner" src={Img1}></img>
      </div>
      <div className="image-text">
        <h1 className="title">Where are you headed next ?</h1>
      </div>
    </div>
  );
};

export default NavbarLinks;
