import {motion} from "framer-motion";
import Img5 from "../Images/Curmatura-Builei1.jpg";

function Animation() {
    return (
        <div className="Buila">
            <motion.h1
            animate={{x: [50, 50, 50], opacity: 1, scale: 1}}
            transition={{
                duration: 5,
                delay: 0.5,
                ease: [0.5, 0.71, 1, 1]
            }}
            initial={{opacity: 0, scale: 0.5}}
            whileHover={{scaleX: 0.7}}
            >
                <h1>Muntii Buila-Vanturarita </h1>
                <img className="img-thumbnail" src={Img5} alt="curmatura-builei"></img>
            </motion.h1>
        </div>
    );
}

export default Animation;