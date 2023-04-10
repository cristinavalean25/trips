import { detalii } from "./detalii";
import {Link} from "react-router-dom";
import Img16  from "../Images/varful-omu.jpg"; 

function Omu() {
    const { omu } = detalii;
    return(
        <>
            <div className="omu">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src={Img16} alt="imagine-omu"></img>
                    </div>
                    <div className="col-md-6">
                        <h1>{omu.titlu}</h1>
                        {omu.descriere.map((val, index) =>(
                            <p key={index} className="text-body">{val}</p>
                        ))}
                        <Link to='/PageOmu'><button className="btn-omu">Show all</button></Link>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Omu;