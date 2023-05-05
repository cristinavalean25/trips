import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import { detalii } from "../components/detalii";
import Varfuri from "../Varfuri";
import cat from "../Images/cat.gif";
import Img1 from "../Images/pexels.jpg";
import Img2 from "../Images/IMG_Apuseni.jpg";
import Img3 from "../Images/scarita7.jpg";
import Img4 from "../Images/scarita2.jpg";
import Img5 from "../Images/scarita1.jpg";
import Img6 from "../Images/scarita4.jpg";
import Img7 from "../Images/scarita3.jpg";
import Img8 from "../Images/scarita6.jpg";
import { useRef } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../components/Footer";

export default function Belioara() {
    const ref = useRef();
    const { belioara1 } = detalii;

    const data = [
        {id: 1, imgSrc: Img3},
        {id: 2, imgSrc: Img4},
        {id: 3, imgSrc: Img5},
        {id: 4, imgSrc: Img6},
        {id: 5, imgSrc: Img7},
        {id: 6, imgSrc: Img8},
    ]

    const [ model, setModel] = useState(false);
    const [ tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
   
    return (
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className="parallax" >
            <Parallax pages={1.5} ref={ref} style={{width: '97%',overflow: 'hidden scroll'}}>
               <ParallaxLayer 
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${Img1})`,
                        backgroundSize: 'cover',
                    }}
                    >
               </ParallaxLayer>

               <ParallaxLayer
                    sticky={{start: 0, end: 2.5}}
                    style={{
                        textAlign: 'center',
                }}
               >
                    <img src={cat} alt=""></img>
               </ParallaxLayer>
            </Parallax>
        </div>
        <div style={{height: 700}}></div>
       
        <div className="row text-belioara">
            <h3 className="titlu-belioara">Rezervația Geo- Botanică Scărița – Belioara, Muntele Mare, jud.Alba</h3>
             <img className="img-thumbnail" src={Img2} style={{border: 'none'}} alt=""></img>   
            {belioara1.descriere.map((val, index) => (
                <p className="text-body" key={index} >{val}</p>
            ))}

            <h5>Accesul</h5>

            {belioara1.descriere1.map((val, index) => (
                <p className="text-body" key={index}>{val}</p>
            ))}

        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="img-model" />
            <CloseIcon onClick={() => setModel(false)}/>
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

            {belioara1.descriere3.map((val, index) => (
                <p className="text-body" key={index} style={{paddingTop: 20}}>{val}</p>
            ))}

        </div>
        <Footer />
        </>
    );
}