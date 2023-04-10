import { detalii } from "../components/detalii";
import Navbar from "../components/Navbar";
import Animation from "../components/motion.apuseni";
import Img17 from "../Images/traseu.jpg";
import Img18 from "../Images/Panoramic-apuseni.JPG";
import Img19 from "../Images/Saua.jpg";
import Img20 from "../Images/Poarta-Zmeilor.jpg";
import Footer from "../components/Footer";
 
export default function PageApuseni(){
    const { apuseni } = detalii;

    return(
        <>
        <Navbar />
            <div className="container-apuseni">
                <img className="img-responsive imagine-belioara"  src={Img17} alt="belioara"></img>
            </div>
        <div className="apuseni">
            <div className="row">
            <Animation />
                {apuseni.descriere.map((val, index) =>(
                    <p key={index} className="text-body">{val}</p>
                ))}
                <img className="img-thumbnail traseu-belioara" src={Img18} alt="traseu-belioara"></img>
                {apuseni.descriere2.map((val, index) =>(
                    <p key={index} className="text-body">{val}</p>
                ))}
                <img className="Img-thumbnail" src={Img19} alt="saua"></img>
                {apuseni.descriere3.map((val, index) =>(
                    <p key={index} className="text-body">{val}</p>
                ))}
                <img className="Img-thumbnail" src={Img20} alt="poarta-zmeilor"></img>
                {apuseni.descriere4.map((val, index) =>(
                    <p key={index} className="text-body">{val}</p>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );
}