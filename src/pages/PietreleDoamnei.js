import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../components/Navbar";
import Varfuri from "../Varfuri";
import { detalii } from "../components/detalii";
import Img1 from "../Images/banner-pietrele-doamnei.jpg";
import Img2 from "../Images/pietreleDoamnei1.jpg";
import Img3 from "../Images/pietreleDoamnei2.jpg";
import Img4 from "../Images/pietreleDoamnei3.jpg";
import Img5 from "../Images/pietreleDoamnei4.jpg";
import Img6 from "../Images/pietreleDoamnei5.jpg";
import Img7 from "../Images/pietreleDoamnei6.jpg";
import Img8 from "../Images/pietreleDoamnei7.jpg";
import Img9 from "../Images/pietreleDoamnei8.jpg";
import Img10 from "../Images/pietreleDoamnei9.jpg";
import Img11 from "../Images/pietreleDoamnei10.jpg";
import Img12 from "../Images/pietreleDoamnei11.jpg";
import Img13 from "../Images/pietreleDoamnei12.jpg";
import Img14 from "../Images/pietreleDoamnei13.jpg";
import Footer from "../components/Footer";


export default function PietreleDoamnei(){

    const { pietreleD } = detalii;

    const images = [
        {id: 1, imgSrc: Img2},
        {id: 2, imgSrc: Img3},
        {id: 3, imgSrc: Img4},
        {id: 4, imgSrc: Img5},
        {id: 5, imgSrc: Img6},
        {id: 6, imgSrc: Img8},
        {id: 7, imgSrc: Img9},
        {id: 8, imgSrc: Img10},
        {id: 9, imgSrc: Img11},
        {id: 10, imgSrc: Img12},
        {id: 11, imgSrc: Img13},
        {id: 12, imgSrc: Img14},
    ]

    const [ model, setModel ] = useState(false);
    const [ tempImgSrc, setTempImgSrc ] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <> 
        <Navbar />
        <div className="search-banner">
            <div className="col-md-12">
                <img className="img-responsive search-banner" alt="search-banner" src={Img1}></img>
            </div>
            <div className="image-text">
                <h1 className="title">Where are you headed next ? <br /> Pietrele Doamnei</h1>
            </div>
        </div>
        <Varfuri />
        <div className="container-fluid pietrele-doamneis">
            <div className="row">
                <div className="col-md-3">
                    <div className={model? "model open" : "model"}>
                        <img src={tempImgSrc} alt=""></img>
                        <CloseIcon onClick={() => setModel(false)} />
                    </div>
                 {images.map((item, index) => {
                    return (
                        <div onClick={() => getImg(item.imgSrc)} key={index}>
                            <img src={item.imgSrc} alt="" className="img-thumbnail" style={{border: 'none'}}></img>
                        </div>
                    )
                 })}                   
                </div>

                <div className="col-md-6">
                    <h1 style={{color: '#808080'}}>PIETRELE DOAMNEI - MASIVUL RARAU </h1>
                    {pietreleD.descriere.map((val, index) => (
                        <p className="text-body" key={index}>{val}</p>
                    ))}
                    <img src={Img7} alt="" className="img-thumbnail" style={{border: 'none'}}></img>
                    {pietreleD.descriere1.map((val, index) => (
                        <p className="text-body" key={index}>{val}</p>
                    ))}
                </div>

                <div className="col-md-3">

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}