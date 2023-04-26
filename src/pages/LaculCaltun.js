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
import Footer from "../components/Footer";



class LaculCaltun extends Component {

    state = {
        index: 0,
        picList: [Img1, Img2, Img3, Img4, Img5, Img6],
        detalii: [detalii.caltun.descriere],
        detalii2: [detalii.caltun.descriere2]
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
                    <img src={this.state.picList[this.state.index]} className="img-thumbnail gallery-caltun-img" alt="img"></img>
                        <div className="btn-caltun">
                            <button onClick={this.onClickPrevious} className="btn-caltun-btn">Previous</button>
                            <button onClick={this.onClickNext} className="btn-caltun-btn">Next</button>
                        </div>  
                    <p className="text-body">{this.state.detalii} </p> 
                    <h4>Către 2390 m…</h4>
                    <img src={Img7} alt="img" className="img-thumbnail" style={{width: '80%', height: 'auto'}}></img>
                    <p className="text-body">{this.state.detalii2}</p>
               </div>
                <Footer />
            </div>
        );
    }
}

export default LaculCaltun;

