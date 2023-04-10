import Img2 from "../Images/varful-moldoveanu-4.jpg";
import { detalii } from "../components/detalii";
import { Link } from "react-router-dom";

const Moldoveanu = () => {
    const { moldoveanu } = detalii;
    return ( 
        <div className="moldoveanu">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-thumbnail" alt="img-moldoveanu" src={Img2}></img>
                </div>
                <div className="col-md-6">
                    <h1>{moldoveanu.titlu}</h1>
                    {moldoveanu.descriere.map((val, index) =>(
                        <p key={index} className="text-body">{val}</p>
                    ))}
                    <Link to="/PageMoldoveanu"><button className="btn-moldoveanu">Show all</button></Link>
                </div>
            </div>
        </div>
    )
}
 
export default Moldoveanu;