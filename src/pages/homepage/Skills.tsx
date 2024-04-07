import { Card } from "@nextui-org/react";
import { AppWindowMac, Laptop, Palette } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";
import { motion } from "framer-motion";
import { animateIn } from "../../utils/animations";

export default function Skills() {
    const mainSkills: {
        name: string;
        caption: string;
        icon: JSX.Element;
    }[] = [
        {
            name: "Software development",
            caption:
                "Crafting intuitive applications for optimal user satisfaction",
            icon: <Laptop size="1.5em" />,
        },
        {
            name: "Graphic design",
            caption: "Creating visually content for effective communication",
            icon: <Palette size="1.5em" />,
        },
        {
            name: "UI/UX",
            caption: "Designing sleek interfaces for seamless user experiences",
            icon: <AppWindowMac size="1.5em" />,
        },
    ];
    const skills: {
        name: string;
    }[] = [
        {
            name: "Typescript",
        },
        {
            name: "Next.js",
        },
        {
            name: "Node.js",
        },
        {
            name: "Microservice",
        },
        {
            name: "Docker",
        },
        {
            name: "Kubernetes",
        },
        {
            name: "Kafka",
        },
        {
            name: "Express.js",
        },
        {
            name: "React.js",
        },
        {
            name: "Redux",
        },
        {
            name: "MongoDB",
        },
        {
            name: "Sequelize",
        },
        {
            name: "Postgress",
        },
        {
            name: "Git",
        },
        {
            name: "CLEAN architecture",
        },
        {
            name: "MVC architecture",
        },
        {
            name: "Swagger",
        },
        {
            name: "Postman",
        },
        {
            name: "Figma",
        },
        {
            name: "Illustrator",
        },
        {
            name: "Photoshop",
        },
        {
            name: "Firebase",
        },
        {
            name: "Tailwind",
        },
        {
            name: "HTML",
        },
        {
            name: "CSS",
        },
        {
            name: "Javascript",
        },
    ];

    return (
        <section id="skills" className="py-12">
            <Container>
                <Heading className="mb-4">Skills</Heading>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <section className="grid grid-cols-1 gap-4">
                        {mainSkills.map((skill) => (
                            <motion.div
                                initial={{
                                    y: 40,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                }}>
                                <Card
                                    isFooterBlurred
                                    radius="lg"
                                    className="flex flex-row gap-3 p-4 align-middle">
                                    <div className="my-auto h-fit rounded-full bg-primary/20 p-4 text-primary">
                                        {skill.icon}
                                    </div>
                                    <section>
                                        <p className="my-auto me-3">
                                            {skill.name}
                                        </p>
                                        <small className="text-default-500">
                                            {skill.caption}
                                        </small>
                                    </section>
                                </Card>
                            </motion.div>
                        ))}
                    </section>
                    <motion.section
                        className="col-span-2 flex h-fit flex-wrap gap-4"
                        initial="initial"
                        whileInView="animate">
                        {skills.map((skill, index) => (
                            <motion.div
                                transition={{ delay: index * 0.05 }}
                                key={index}
                                variants={animateIn}>
                                <Card
                                    radius="lg"
                                    className="flex w-fit flex-row gap-3 rounded-large border-1 border-white/10 bg-white bg-white/10 p-2 align-middle">
                                    <p className="mx-4">{skill.name}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.section>
                </div>
            </Container>
        </section>
    );
}
