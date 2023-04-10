import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import AnimationMoldoveanu from "../components/motion.moldoveanu";
import { detalii } from "../components/detalii";
import Img20 from "../Images/varful-moldoveanu-4.jpg";
import Img21 from "../Images/stana lui burnei.jpg";
import Footer from "../components/Footer";



export default function PageMoldoveanu(){
    const { moldoveanu } = detalii;
    return( 
        <div className="moldoveanu-content">
            <Navbar />
            <NavbarLinks />
            <Varfuri />
            <div className="moldoveanu-text">
                <div className="row">
                    <AnimationMoldoveanu />
                    {moldoveanu.descriere.map((val, index) =>(
                    <p className="text-body" key={index}>{val}</p>
                    ))}
                    <img src={Img20} alt="varful-moldoveanu"></img>
                    {moldoveanu.descriere2.map((val, index) =>(
                        <p key={index} className="text-body">{val}</p>
                    ))}
                    <img src={Img21} alt="stana-lui-burnei"></img>
                </div>
            </div>
            <Footer />
        </div>
    );
}