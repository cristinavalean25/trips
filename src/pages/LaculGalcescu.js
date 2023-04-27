import { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import Img1 from "../Images/LaculGalcesu1.jpg";
import Img2 from "../Images/LaculGalcescu2.jpg";
import Img3 from "../Images/LaculGalcescu3.jpg";
//import Img4 from "../Images/LaculGalcescu4.jpg";
//import Img5 from "../Images/LaculGalcescu5.jpeg";


export default function LaculGalcescu() {

    const data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
    ]

    const [ model, setModel ] = useState(false);
    const [ tempImgSerc, setTempImgSrc ] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className={model? "model open": "model"}>
            <img src={tempImgSerc} alt="img"></img>
        </div>
        <div className="Gallery">
            {data.map((item, index) => {
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} alt="imag"></img>
                    </div>
                )
            })}
        </div>
        </>
    );
}