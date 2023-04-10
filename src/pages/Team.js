import { detalii } from '../components/detalii';
import Navbar from '../components/Navbar';
import NavbarLinks from '../components/NavbarLinks';
import Varfuri from '../Varfuri';
import Img7 from '../Images/bears.jpg'
import Img8 from '../Images/funny.jpg'


function Team() {
    const {team} = detalii;
    return (
        <div className='App'>
            <Navbar />
            <NavbarLinks />
            <Varfuri />
            <div className='content-team'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>{team.titluTeam}</h4>
                        {team.descriere.map((val, index) =>(
                            <p key={index} className='text-body'>{val}</p>
                        ))}
                        <img className='img-responsive bears' alt='imagine-bears-team' src={Img7}></img>
                        <h4>{team.titlu}</h4>
                        {team.certificari.map((val, index) => (
                            <li key={index} className='text-body'>{val}</li>
                        ))}
                        <img className='img-thumbnail funny' alt='imagine-funny' src={Img8}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team