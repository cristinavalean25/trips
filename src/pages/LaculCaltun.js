import Navbar from "../components/Navbar"
import NavbarLinks from "../components/NavbarLinks"
import Varfuri from "../Varfuri";
import { Component } from "react";
import { detalii } from "../components/detalii";
import Img1 from "../Images/LaculCaltun1.jpg";
import Img2 from "../Images/LaculCaltun2.jpg";
import Img3 from "../Images/LaculCaltun3.jpg";
import Img4 from "../Images/LaculCaltun9.jpg";
import Img5 from "../Images/LaculCaltun5.jpg";
import Img6 from "../Images/LaculCaltun.jpg";
import Img7 from "../Images/Lacul-Călțun-20.jpg";
import Img8 from "../Images/Lacul-Călțun-4.jpg";
import Img9 from "../Images/LaculCaltun10.jpeg";
import Footer from "../components/Footer";



class LaculCaltun extends Component {

    state = {
        index: 0,
        picList: [Img1, Img2, Img3, Img4, Img5, Img6],
        details: [detalii.caltun.descriere],
        details2: [detalii.caltun.descriere2],
        details3: [detalii.caltun.descriere3]
    }

    onClickNext = () => {
        if (this.state.index + 1 === this.state.picList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickPrevious = () => {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.picList.length -1
            })
        } else {
            this.setState ({
                index: this.state.index -1
            })
        }
    }

    render() {
        return (
            <div className="gallery-caltun">
                <Navbar />
                <NavbarLinks />
                <Varfuri />
               <div className="row gallery-img">
                    <img src={this.state.picList[this.state.index]} className="img-thumbnail gallery-caltun-img" alt="img" style={{border: 'none'}}></img>
                        <div className="btn-caltun">
                            <button onClick={this.onClickPrevious} className="btn-caltun-btn">Previous</button>
                            <button onClick={this.onClickNext} className="btn-caltun-btn">Next</button>
                        </div>  
                    <p className="text-body">{this.state.details} </p> 
                    <h4>Către 2390 m…</h4>
                    <img src={Img7} alt="img" className="img-thumbnail" style={{border: 'none'}}></img>
                    <p className="text-body">{this.state.details2}</p>
                    <img src={Img8} className="img-thumbnail" alt="img" style={{border: 'none'}}></img>
                    <h4>Drumul de întoarcere...</h4>
                    <p className="text-body">{this.state.details3}</p>
                    <img src={Img9} className="img-thumbnail" alt="img" style={{border: 'none'}}></img>
               </div>
                <Footer />
            </div>
        );
    }
}

export default LaculCaltun;

