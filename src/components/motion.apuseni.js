import { motion } from "framer-motion";

function Animation() {
    return (
        <div className="App">
            <motion.h1
                animate={{ x: [50, 50, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
            >
             <h1>Muntii Apuseni</h1>
            </motion.h1>
        </div>
    );
}
export default Animation;