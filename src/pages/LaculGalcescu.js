import { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Img1 from "../Images/LaculGalcesu1.jpg";
import Img2 from "../Images/LaculGalcescu2.jpg";
import Img3 from "../Images/LaculGalcescu3.jpg";
import Img4 from "../Images/LaculGalcescu4.jpg";
import Img5 from "../Images/LaculGalcescu5.jpeg";


export default function LaculGalcescu() {

    const sliderImage = [
       {url: Img1},
       {url: Img2},
       {url: Img3},
       {url: Img4},
       {url: Img5},
    ]

   const length = sliderImage.length;

   const [ activeImageNum, setCurrent ] = useState(0)

   const nextSlider = () => {
    setCurrent(activeImageNum === length -1 ? 0 : activeImageNum + 1)
   };

   const prevSlider = () => {
    setCurrent(activeImageNum === 0 ? length -1 : activeImageNum -1)
   }

   if(!Array.isArray(sliderImage) || sliderImage.length <= 0 ){
    return null;
   }

  

    

    return (
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className="lacul-galcescu">
             <NavigateBeforeIcon onClick={prevSlider} />
             
             {sliderImage.map((currentSlide, index) => {
                return (
                    <div className={index === activeImageNum ? "currentSlide active" : "currentSlide"} style={{height: 'fixed'}}>
                        {index === activeImageNum && <img src={currentSlide.url} className="image" loading="lazy" alt=""/>}
                    </div>
                )
             })}
            <NavigateNextIcon onClick={nextSlider}/>
        </div>
       
        
        </>
    );
}