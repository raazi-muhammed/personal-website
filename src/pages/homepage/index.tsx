import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import { motion } from "framer-motion";
import Container from "../../components/layout/Components";

export default function index() {
    return (
        <motion.main
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.1, ease: "easeInOut" }}>
            <Hero />
            <Projects />
            <Skills />
            <ContactMe />
            <footer className="py-4">
                <Container>
                    <p className="text-center">by Raazi Muahmmed</p>
                </Container>
            </footer>
        </motion.main>
    );
}
