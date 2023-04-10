//import { Route } from "react-router-dom"
import { detalii } from "./detalii"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LandscapeIcon from '@mui/icons-material/Landscape';


function Footer() {
    const { footer } = detalii;

   return (
        <footer className="bg-dark">
            <section> 
                <form action="">
                    <div className="row d-flex justify-content-center">
                        <div class="col-auto"  style={{paddingTop: "10px"}}>
                            <p class="pt-2">
                                <strong>Sign up for new info trips</strong>
                            </p >
                        </div>
                        <div class="col-md-3">
                            <div class="form-outline form-white mb-4" style={{paddingTop: "10px"}}>
                                <input type="email" class="form-control" id="form-email" placeholder="Email address"></input>
                            </div>
                        </div>
                        <div class="col-auto"  style={{paddingTop: "10px"}}>
                            <button type="submit" class="btn btn-outline-light mb-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <section>
                {footer.descriere.map((val, index) => (
                    <p className="text-footer" key={index}>{val}</p>
                ))}
            </section>
            
            <div className="footer-icon">
               <span><FacebookIcon /></span>
               <span><InstagramIcon /></span>
               <span><YouTubeIcon /></span>
               <span><LandscapeIcon /></span>
            </div>
        </footer>
   )
}

export default Footer;

