import NavBar from "./components/layout/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProjectPage from "./pages/project";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();
    return (
        <main className="min-h-screen bg-gradient-to-tr from-[#100730] from-0% via-black via-30% to-[#100730] to-100% text-foreground dark">
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes key={location.key} location={location}>
                    <Route index element={<HomePage />} />
                    <Route path="project" element={<ProjectPage />} />
                </Routes>
            </AnimatePresence>
        </main>
    );
}
