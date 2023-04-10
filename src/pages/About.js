import Navbar from '../components/Navbar';
import NavbarLinks from '../components/NavbarLinks';
import Varfuri from '../Varfuri';
import { detalii } from '../components/detalii';
import Img5 from '../Images/narcisele-salbatice.jpg';
import Img6 from '../Images/apuseni.jpg';
import Footer from '../components/Footer';


function About() {
  const { about } = detalii;
  return (
    <div className='App'>
      <Navbar />
      <NavbarLinks />
      <Varfuri />
      <div className='content-about'>
         <div className='row'>
            <div className='co-md-12 details-container'>
              <h3>Despre noi</h3>
              <h4>{about.titlu}</h4>
              {about.descriere.map((val, index) =>(
                <p key={index} className='text-body'>{val}</p>
              ))}
              <img className='img-thumbnail narcise salbatice' src={Img5} alt='narcise-salbatice'></img>
              {about.descriere2.map((val, index) =>(
                <p key={index} className='text-body'>{val}</p>
              ))}
              <img className='img-thumbnail' src={Img6} alt='apuseni'></img>
            </div>
         </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
