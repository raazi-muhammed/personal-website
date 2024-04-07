import Container from "../../components/layout/Components";
import { motion } from "framer-motion";
import ReadMe from "./ReadMe";
import { Link, useSearchParams } from "react-router-dom";
import { ScrollShadow } from "@nextui-org/react";
import { projects } from "../../constants/projects";

export default function index() {
    const [searchParams] = useSearchParams();

    const projectName = searchParams.get("name");

    const project = projects.find((a) => a.name == projectName);

    if (!project) return <p>No project found</p>;

    return (
        <motion.main
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Container className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <section className="mt-12 grid h-fit gap-4">
                    <small>{project.date}</small>
                    <h2 className="text-3xl font-semibold text-primary">
                        {project.name}
                    </h2>
                    <section>
                        {project.links.map((link) => (
                            <section className="flex gap-2">
                                <div className="my-auto">{link.icon}</div>
                                <Link to={link.url} target="_blank">
                                    <p>{link.name}</p>
                                </Link>
                            </section>
                        ))}
                    </section>
                    <img
                        className="h-56 w-full object-cover"
                        src={project.preview}
                    />
                </section>

                <div className="block lg:hidden">
                    <ReadMe readmeMeLink={project.readmeMeLink} />
                </div>
                <ScrollShadow className="top-0 col-span-2 -mt-16 hidden h-screen w-full py-20 lg:block">
                    <ReadMe readmeMeLink={project.readmeMeLink} />
                </ScrollShadow>
            </Container>
            <link rel="stylesheet" href="/markdown.css" />
        </motion.main>
    );
}
