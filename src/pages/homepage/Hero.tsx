import Container from "../../components/layout/Components";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="grid place-items-center pb-16 pt-6 text-center">
            <Container>
                <div className="max-w-[85vw] md:hidden">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            fontSize: "4rem",
                        }}
                        animate={{
                            originY: 0,
                            fontSize: "2rem",
                            opacity: [1, 1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate",
                        }}
                        className="truncate font-bold text-primary">
                        Raazi Muhammed
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            fontSize: "1rem",
                        }}
                        animate={{
                            originY: 0,
                            fontSize: "0.75rem",
                            opacity: [1, 1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate",
                        }}
                        className="truncate">
                        Self-Taught Graphic Designer <br />
                        Turned Self-Taught Web Developer
                    </motion.p>
                </div>
                <div className="hidden md:block">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            fontSize: "7rem",
                        }}
                        animate={{
                            originY: 0,
                            fontSize: "3rem",
                            opacity: [1, 1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate",
                        }}
                        className="truncate font-bold text-primary">
                        Raazi Muhammed
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            fontSize: "2rem",
                        }}
                        animate={{
                            originY: 0,
                            fontSize: "1rem",
                            opacity: [1, 1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate",
                        }}
                        className="truncate">
                        Self-Taught Graphic Designer <br />
                        Turned Self-Taught Web Developer
                    </motion.p>
                </div>
            </Container>
        </div>
    );
}
