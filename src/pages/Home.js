import Navbar from '../components/Navbar';
import NavbarLinks from '../components/NavbarLinks';
import Varfuri from '../Varfuri';
import Moldoveanu from '../components/Moldoveanu';
import Negoiu from '../Negoiu';
import Omu from '../components/Omu';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='App'>
      <Navbar />
      <NavbarLinks />
      <Varfuri />
      <div className='content'>
        <Moldoveanu />
        <Negoiu />
        <Omu />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
