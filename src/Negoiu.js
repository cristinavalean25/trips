import Img3 from "./Images/Imagine-negoiu.jpg";
import { detalii } from "./components/detalii";
import { Link } from "react-router-dom";


function Negoiu(){
    const { negoiu } = detalii;
    return(
        <div className="negoiu">
            <div className="row"> 
                <div className="col-md-6">
                    <h1>{negoiu.titlu}</h1>
                    {negoiu.descriere.map((val, index) => (
                        <p key={index} className="text-body">{val}</p>
                    ))}
                    <Link to="/PageNegoiu"><button className="btn-negoiu" type="button">Show all</button></Link>
                </div>
                <div className="col-md-6">
                    <img className="img-thumbnail" src={Img3} alt="imagine-negoiu" ></img>
                </div>
            </div>
            </div>
    )
}
 
export default Negoiu;