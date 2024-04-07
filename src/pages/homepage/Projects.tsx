import { ChevronRight, Github, Globe, Workflow } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { defaultAnimation } from "../../utils/animations";

export default function Projects() {
    const projects: {
        name: string;
        description: string;
        date: string;
        preview?: string;
        links: {
            name: string;
            url: string;
            icon: JSX.Element;
        }[];
    }[] = [
        {
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
        },
        {
            name: "Shop Nexus",
            description:
                "A comprehensive Multi-Vendor E-Commerce platform facilitating buying and selling of products",
            date: "Sep 2023 - Nov 2023",
            preview: "/images/homepage/shop-nexus-preview.png",
            links: [
                {
                    name: "Git repo",
                    url: "https://github.com/raazi-muhammed/shop-nexus",
                    icon: <Github size="1em" />,
                },
                {
                    name: "Live link",
                    url: "https://shopnexus.live/",
                    icon: <Globe size="1em" />,
                },
            ],
        },
        {
            name: "NPM: React Connect Div",
            description: "Developed a npm package to connect two divs together",
            date: "Apr 2023 - Apr 2023",
            preview: "/images/homepage/react-connect-div.png",
            links: [
                {
                    name: "Git repo",
                    url: "https://github.com/raazi-muhammed/react-connect-div",
                    icon: <Github size="1em" />,
                },
                {
                    name: "NPM Link",
                    url: "https://www.npmjs.com/package/react-connect-div",
                    icon: <Workflow size="1em" />,
                },
            ],
        },
        {
            name: "Alma Foods",
            description:
                "Converted a HTML, CSS, JS website into React + Typescript",
            date: "Jan 2024 - Jan 2024",

            links: [],
        },
        {
            name: "Sorting Visualizer",
            description:
                "Using this project anyone can explore diverse sorting algorithms like Insertion, Bubble, Selection, Quick, and Merge",
            date: "Dec 2023 - Dec 2023",
            preview: "/images/homepage/sorting-visualizer-preview.png",
            links: [
                {
                    name: "Git repo",
                    url: "https://github.com/raazi-muhammed/sorting-visualizer",
                    icon: <Github size="1em" />,
                },
                {
                    name: "Live link",
                    url: "https://sorting-visualizer-rmk.netlify.app/",
                    icon: <Globe size="1em" />,
                },
            ],
        },
        {
            name: "Rastreo",
            description: "A score-tracking app with features like",
            date: "Mar 2024 - Mar 2024",
            preview: "/images/homepage/rastreo-preview.png",
            links: [
                {
                    name: "Git repo",
                    url: "https://github.com/raazi-muhammed/rastreo",
                    icon: <Github size="1em" />,
                },
                {
                    name: "Live link",
                    url: "https://rastreo-rmk.netlify.app/",
                    icon: <Globe size="1em" />,
                },
            ],
        },
    ];
    return (
        <section id="projects" className="bg-default-50/50 py-8">
            <Container>
                <motion.div
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                    }}>
                    <Heading>Projects</Heading>
                    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => (
                            <motion.div
                                variants={defaultAnimation}
                                initial="initial"
                                whileInView="animate"
                                whileTap="tap"
                                transition={{
                                    duration: 0.3,
                                }}
                                whileHover="hover">
                                <Card
                                    isFooterBlurred
                                    className="mb-8 min-h-60 overflow-visible py-4">
                                    <CardHeader className="z-30 flex-col items-start px-4 pb-0 pt-2">
                                        <div className="flex w-full justify-between">
                                            <p className="text-tiny font-bold uppercase">
                                                {project.date}
                                            </p>
                                            <ChevronRight size="1em" />
                                        </div>
                                        <h4 className="text-large font-bold text-primary">
                                            {project.name}
                                        </h4>
                                        <small className="text-default-500">
                                            {project.description}
                                        </small>
                                    </CardHeader>
                                    {project.preview ? (
                                        <CardBody className="-mb-4 -mt-8 overflow-visible p-0 align-bottom">
                                            <div className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full bg-gradient-to-b from-default-50 to-transparent"></div>
                                            <img
                                                alt="Card background"
                                                className="z-10 m-0 mb-0 mt-auto h-full rounded-xl object-cover"
                                                src={project.preview}
                                            />
                                        </CardBody>
                                    ) : null}
                                    {project.links.length ? (
                                        <CardFooter className="absolute -bottom-5 left-4 right-4 z-50 mx-auto h-10 w-fit justify-between gap-2 rounded-large border-1 border-white/10 shadow-small before:rounded-xl before:bg-white/10">
                                            {project.links.map((link) => (
                                                <Button
                                                    target="_blank"
                                                    href={link.url}
                                                    as={Link}
                                                    className="bg-white/10 text-tiny text-white"
                                                    variant="flat"
                                                    color="default"
                                                    radius="lg"
                                                    size="sm">
                                                    {link.icon}
                                                    {link.name}
                                                </Button>
                                            ))}
                                        </CardFooter>
                                    ) : null}
                                </Card>
                            </motion.div>
                        ))}
                    </section>
                </motion.div>
            </Container>
        </section>
    );
}
