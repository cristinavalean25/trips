import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
import Img1 from "../Images/LaculGalcescu2.jpg";
import Img2 from "../Images/LaculGalcescu3.jpg";
import Img3 from "../Images/LaculGalcescu4.jpg";
import Img4 from "../Images/LaculGalcescu5.jpeg";
import Img5 from "../Images/LaculGalcescu7.jpg";
import Img6 from "../Images/LaculGalcescu6.jpg";
import Footer from "../components/Footer";

export default function ParangulMare() {

    const [imageNum, setImageNum] = useState(0);

    const sliderImages = [
        {url: Img1},
        {url: Img2},
        {url: Img3},
        {url: Img4},
        {url: Img5},
        {url: Img6},
    ];

    return (
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className="parang">
            <SimpleImageSlider 
                width={700}
                height={400}
                images={sliderImages}
                showBullets={true}
                showNavs={true}
                autoPlay={true} 
                onStartSlide = {(index) => {
                   setImageNum(index);
                }}
                   autoPlayDelay = {3}
            />
            <div style = {{paddingTop: '20px'}}>
                {imageNum}
            </div>
        </div>
        <Footer />
        </>
    );
}