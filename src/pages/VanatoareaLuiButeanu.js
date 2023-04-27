import { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarLinks from "../components/NavbarLinks";
import Varfuri from "../Varfuri";
import { detalii } from "../components/detalii";
import Img1 from "../Images/apuseni.jpg";




export default function VanatoareaLuiButeanu() {
    const { apuseni } = detalii;
    const [showMore, setShowMore] = useState(false);

    const ShowAllPage = () => {
        setShowMore(!showMore);
    };

    return (
        <>
        <Navbar />
        <NavbarLinks />
        <Varfuri />

            <div className="all-page">
            {apuseni.descriere.map((val, index) => (
                <p key={index}>{val}</p>
            ))}

            {showMore && (
                <p>{apuseni.descriere}</p>
            )}

            {showMore && (
                <img src={Img1} className="img-thumbnail" alt="img"></img>
            )}

            <button onClick={ShowAllPage}>Show more</button>

            </div>
        </>
    );
}