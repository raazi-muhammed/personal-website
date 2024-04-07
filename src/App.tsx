import Container from "./components/layout/Components";
import NavBar from "./components/layout/NavBar";
import ContactMe from "./pages/homepage/ContactMe";
import Hero from "./pages/homepage/Hero";
import Projects from "./pages/homepage/Projects";
import Skills from "./pages/homepage/Skills";

export default function App() {
    return (
        <main className="min-h-screen bg-gradient-to-tr from-[#100730] from-0% via-black via-30% to-[#100730] to-100% text-foreground dark">
            <NavBar />
            <Hero />
            <Projects />
            <Skills />
            <ContactMe />
            <footer className="py-4">
                <Container>
                    <p className="text-center">by Raazi Muahmmed</p>
                </Container>
            </footer>
        </main>
    );
}
