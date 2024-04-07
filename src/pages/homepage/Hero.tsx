import Container from "../../components/layout/Components";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="grid place-items-center py-16 text-center">
            <Container>
                <motion.div
                    initial={{ scale: 2, height: "10rem" }}
                    animate={{
                        scale: 1,
                        originY: 0,
                        height: "5rem",
                    }}
                    transition={{
                        duration: 1,
                        ease: "anticipate",
                    }}>
                    <h1 className="text-5xl font-bold text-primary">
                        Raazi Muhammed
                    </h1>
                    <p>
                        Self-Taught Graphic Designer <br />
                        Turned Self-Taught Web Developer
                    </p>
                </motion.div>
            </Container>
        </div>
    );
}
