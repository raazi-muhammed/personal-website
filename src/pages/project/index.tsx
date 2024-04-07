import { Github } from "lucide-react";
import Container from "../../components/layout/Components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function index() {
    const project: {
        name: string;
        description: string;
        date: string;
        preview?: string;
        links: {
            name: string;
            url: string;
            icon: JSX.Element;
        }[];
    } = {
        name: "Omniflow",
        description:
            "Project Toolkit for Effortless Planning and Management of Projects.",
        date: "Mar 2024 - Present",
        preview: "/images/homepage/omniflow-preview.png",
        links: [
            {
                name: "Git repo",
                url: "https://github.com/raazi-muhammed/omniflow",
                icon: <Github size="1em" />,
            },
        ],
    };

    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(
                "https://raw.githubusercontent.com/raazi-muhammed/react-connect-div/main/README.md"
            )
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    });

    return (
        <motion.main
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Container>
                <section className="mt-8">
                    <small>{project.date}</small>
                    <h2 className="fon t-semibold text-3xl text-primary">
                        {project.name}
                    </h2>
                </section>
                <section>
                    <img
                        className="h-56 w-full object-cover"
                        src={project.preview}
                        alt=""
                    />
                </section>
                <section>
                    <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
                </section>
            </Container>
            <link rel="stylesheet" href="/markdown.css" />
        </motion.main>
    );
}
