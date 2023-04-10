import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Img10 from "../Images/Img1.jpg";
import Img11 from "../Images/Img2.1.jpg";
import Img12 from "../Images/Img3.jpg";
import Img13 from "../Images/img5.jpg";
import Img14 from "../Images/Img6.jpg";
import Img15 from "../Images/Img4.jpg";


const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: Img10,
        },
        {
            id: 2,
            imgSrc: Img11,
        },
        {
            id: 3,
            imgSrc: Img12,
        },
        {
            id: 4,
            imgSrc: Img13,
        },
        {
            id: 5,
            imgSrc: Img14,
        },
        {
            id: 6,
            imgSrc: Img15,
        },
     
    ]
        const [ model, setModel] = useState(false);
        const [ tempImgSrc, setTempImgSrc] = useState('');
        const getImg = (imgSrc) => {
            setTempImgSrc(imgSrc);
            setModel(true);
        }

    return ( 
        <>
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
        </>
     );
}
 
export default Gallery;