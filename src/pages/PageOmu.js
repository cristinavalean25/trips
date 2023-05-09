import Navbar from "../components/Navbar";
import { detalii } from "../components/detalii";
import Img15 from "../Images/vf2.jpg";
import Varfuri from "../Varfuri";
import Img17 from "../Images/cascada2.png"
import Img16 from "../Images/Bifurcatie.jpg"
import Img18 from "../Images/Babele.jpg";
import Footer from "../components/Footer";

export default function PageOmu(){
    const { omu } = detalii;
    return(
        <> 
        <Navbar />
        <div className="col-md-12">
            <img className="img-responsive imagine-omu" src={Img15} alt="banner-omu"></img>
        </div>
            <Varfuri />
        <div className="omu-content">
            <h1>{omu.titlu}</h1>
            {omu.descriere.map((val, index) =>(
                <p className="text-body" key={index}>{val}</p>
            ))}
            <img className="cascada img-responsive" src={Img17} alt="cascada-omu"></img>
            {omu.descriere2.map((val, index) =>(
                <p key={index} className="text-body">{val}</p>
            ))}
            <img className="img-thumbnail"  src={Img16} style={{border: 'none'}} alt="bifurcatie"></img>
            {omu.descriere3.map((val, index) =>(
                <p className="text-body" key={index}>{val}</p>
            ))}
            <h3>{omu.titluBabele}</h3>
            {omu.descriere4.map((val, index) =>(
                <p className="text-body" key={index}>{val}</p>
            ))}
            <img src={Img18} className="img-thumbnail" style={{border: 'none'}} alt="babele"></img>
        </div>
        <Footer />
        </>
    );
}