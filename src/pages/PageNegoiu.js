import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import Animation from "../components/motion";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import { detalii } from "../components/detalii";
import Footer from "../components/Footer";



export default function PageNegoiu(){
    const { negoiu } = detalii;
    return (
        <div className="negoiu-content">
            <Navbar />
            <NavbarLinks />
            <Varfuri />
            <Animation />
            <Gallery />
            <div className="row">
                <div className="col-md-8  mt-2">
                    <h1>{negoiu.titlu}</h1>
                    {negoiu.descriere.map((val, index) =>(
                    <p key={index} className="text-body">{val}</p>
                     ))}
                     {negoiu.descriere2.map((val, index) =>(
                        <p key={index} className="text-body">{val}</p>
                     ))}
                </div>
                <div className="negoiu-right col-md-4  mt-2">
                        <form>
                            <h3>{negoiu.titlu2}</h3>
                                <li><Link to="/LaculCaltun">Lacul Caltun</Link></li> 
                                <li><Link>Lacul Capra</Link></li> 
                                <li><Link>Varful Iezarul caprei 2417m</Link></li> 
                                <li><Link>Varful Iezarul caprei</Link></li> 
                                <li><Link>Saua Capre</Link></li> 
                                <li><Link>Vanatoarea lui Buteanu</Link></li> 
                        </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}