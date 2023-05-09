import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import Animation from "../components/motion.buila";
import { detalii } from "../components/detalii";
import Img5 from "../Images/Buila1.jpg";
import Img6 from "../Images/pahomie.jpg";
import Img7 from "../Images/buila2.jpg";
import Img8 from "../Images/parc2.jpg";
import Footer from "../components/Footer";


export default function PageBuilaVanturarita(){
    const { buila } = detalii;
    return(
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
       
        <div className="buila-content">
        <Animation/>
          {buila.descriere.map((val, index) =>(
            <p className="text-body" key={index}>{val}</p>
          ))}
          <img className="img-thumbnail" src={Img5} style={{border: 'none'}} alt="buila"></img>
          <h3>{buila.titlu}</h3>
          <h6>{buila.titlu2}</h6>
          {buila.descriere2.map((val, index) =>(
            <p className="text-body" key={index}>{val}</p>
          ))}
          <img className="img-thumbnail" src={Img6} style={{border: 'none'}} alt="schit"></img>
          {buila.descriere3.map((val, index) =>(
            <p className="text-body" key={index}>{val}</p>
          ))}
          <img className="img-thumbnail" src={Img7} style={{border: 'none'}} alt="buila"></img>
          {buila.descriere4.map((val, index) =>(
            <p className="text-body" key={index}>{val}</p>
          ))}
          <img className="img-thumbnail" src={Img8} style={{border: 'none'}} alt="schit"></img>
        </div>
        <Footer />
        </>
    )
}