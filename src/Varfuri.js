import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';

const Varfuri = () => {
    const [showManu, setShowManu] = useState(false);
    let menu 

    if(showManu) {
        menu = <div className='more-pages'>
            <Link to='/PageApuseni'>Muntii Apuseni</Link> <br/>
            <Link to='/'></Link><br/>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
        </div>
    }

    return (
        <div className="varfuri d-flex">
        <ul>
            <li><Link to='/pagemoldoveanu'>Varful Moldoveanu</Link></li>
            <li><Link to="/PageNegoiu">Varful Negoiu</Link></li>
            <li><Link to="/PageOmu" >Varful Omu</Link></li>
            <li><Link to="/PageLespezi">Varful Lespezi</Link></li>
            <li><Link to="/PageBuilaVanturarita">Buila Vanturarita</Link></li>
            <li><DehazeIcon onClick={() => setShowManu(!showManu)}/></li>
            {menu}
        </ul>
    </div> 
    );
}
 
export default Varfuri;