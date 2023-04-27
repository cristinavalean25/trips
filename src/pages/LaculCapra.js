import { useState } from "react";
import Carousel from "better-react-carousel";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import { detalii } from "../components/detalii";
import Img1 from "../Images/LaculCapra.jpg";
import Img2 from "../Images/Lacul-Capra-Munţii-Făgăraş.jpg";
import Img3 from "../Images/LaculCapra3.jpg";
import Img4 from "../Images/lacul-capra1.jpg";
import Img5 from "../Images/Lacul-Capra-12.jpg";
import Img6 from "../Images/Lacul-Capra-din-Arges-13.jpg";
import Img7 from "../Images/panorama-muntii-fagaras-balea-capra-2.jpg";
import Footer from "../components/Footer";


const LaculCapra = () => {
    const { capra } = detalii;
    const [ showMore, setShowMore ] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    
    return ( 
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className="text-lacul-capra">
                <h1>Lacul Capra, comoara ascunsă a Munţilor Făgăraş</h1>
                {capra.descriere.map((val, index) => (
                    <p className="text-body-1" key={index}>{val}</p>
                ))}
            <div className="lacul-capra">
                <Carousel cols={2} rows={1} gap={10} loop>
                    <Carousel.Item>
                        <img src={Img1} alt="img"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Img2} alt="img" ></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Img3} alt="img"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Img4} alt="img"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Img5} alt="img"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Img6} alt="img"></img>
                    </Carousel.Item>
                </Carousel>
            </div>
            {capra.descriere.map((val, index) => (
                <p className="text-body-1" key={index}>{val}</p>
            ))}

     
        {showMore && (
            <img src={Img7} className="img-thumbnail" alt="img" style={{border: 'none', width: '99%'}}></img>
        )}
     
        {showMore && (
            <p className="text-body-1">{capra.descriere2}</p>
        )}
            <button onClick={toggleReadMore} className="btn-capra">Show more !</button>
        </div>
        <Footer />
        </>
     );
}
 
export default LaculCapra;