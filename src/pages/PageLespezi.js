import { detalii } from "../components/detalii";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import Img5 from "../Images/lespezi.jpg"
import Footer from "../components/Footer";


export default function PageLespezi(){
    const { lespezi } = detalii;
    return(
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />
        <div className="lespezi-content">
            <h1>{lespezi.titlu}</h1>
            <img className="img-thumbnail" src={Img5} style={{border: 'none'}} alt="lespezi"></img>
            {lespezi.descriere.map((val, index) => (
                <p className="text-body" key={index}>{val}</p>
            ))}
        </div>
        <Footer />
        </>
    );
}