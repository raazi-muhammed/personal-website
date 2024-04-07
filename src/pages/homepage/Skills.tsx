import { Card, Tab, Tabs } from "@nextui-org/react";
import { AppWindowMac, Laptop, Palette } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";
import { motion } from "framer-motion";
import { defaultAnimation } from "../../utils/animations";
import { useState } from "react";

enum SkillType {
    TECH = "TECH",
    INTEGRATION = "INTEGRATION",
    TOOLS = "TOOLS",
}

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
        type: SkillType;
    }[] = [
        {
            name: "Typescript",
            type: SkillType.TECH,
        },
        {
            name: "Next.js",
            type: SkillType.TECH,
        },
        {
            name: "Node.js",
            type: SkillType.TECH,
        },
        {
            name: "Microservice",
            type: SkillType.TECH,
        },
        {
            name: "Docker",
            type: SkillType.TECH,
        },
        {
            name: "Kubernetes",
            type: SkillType.TECH,
        },
        {
            name: "Kafka",
            type: SkillType.TECH,
        },
        {
            name: "Express.js",
            type: SkillType.TECH,
        },
        {
            name: "React.js",
            type: SkillType.TECH,
        },
        {
            name: "Redux",
            type: SkillType.TECH,
        },
        {
            name: "MongoDB",
            type: SkillType.TECH,
        },
        {
            name: "Sequelize",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Postgress",
            type: SkillType.TECH,
        },
        {
            name: "Git",
            type: SkillType.TOOLS,
        },
        {
            name: "CLEAN architecture",
            type: SkillType.TECH,
        },
        {
            name: "MVC architecture",
            type: SkillType.TECH,
        },
        {
            name: "Swagger",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Postman",
            type: SkillType.TOOLS,
        },
        {
            name: "Figma",
            type: SkillType.TOOLS,
        },
        {
            name: "Illustrator",
            type: SkillType.TOOLS,
        },
        {
            name: "Photoshop",
            type: SkillType.TOOLS,
        },
        {
            name: "Firebase",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Tailwind",
            type: SkillType.TECH,
        },
        {
            name: "S3",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Lambda",
            type: SkillType.INTEGRATION,
        },
        {
            name: "EC2",
            type: SkillType.INTEGRATION,
        },
        {
            name: "WebSocket",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Socket.IO",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Razorpay",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Cloudinary",
            type: SkillType.INTEGRATION,
        },
        {
            name: "SendGrid",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Node Mailer",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Multer",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Winston",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Morgan",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Logstash",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Kibana",
            type: SkillType.INTEGRATION,
        },
        {
            name: "Elasticsearch",
            type: SkillType.INTEGRATION,
        },
    ];

    const [skillsToShow, setSkillsToShow] = useState(skills);

    return (
        <section id="skills" className="py-12">
            <Container>
                <Heading className="mb-4">Skills</Heading>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <section className="grid h-fit grid-cols-1 gap-4">
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
                        onViewportEnter={() => setSkillsToShow([...skills])}
                        className="col-span-2">
                        <Tabs
                            defaultSelectedKey={"all"}
                            onSelectionChange={(key) => {
                                if (key == "all") {
                                    setSkillsToShow(skills);
                                    return;
                                }
                                setSkillsToShow(
                                    skills.filter((s) => s.type == key)
                                );
                            }}
                            size="sm"
                            className="mx-auto mb-4 max-w-[80vw] overflow-auto"
                            color="primary"
                            aria-label="Tabs colors"
                            radius="full">
                            <Tab key="all" title="All" />
                            <Tab key={SkillType.TECH} title="Technologies" />
                            <Tab
                                key={SkillType.INTEGRATION}
                                title="Integrations"
                            />
                            <Tab key={SkillType.TOOLS} title="Tools" />
                        </Tabs>
                        <motion.section
                            className="flex h-fit flex-wrap gap-4"
                            initial="initial"
                            animate="animate">
                            {skillsToShow.map((skill, index) => (
                                <motion.div
                                    transition={{ delay: index * 0.05 }}
                                    key={`${skill.name}-${new Date()}`}
                                    variants={defaultAnimation}>
                                    <Card
                                        radius="lg"
                                        className="flex w-fit flex-row gap-3 rounded-large border-1 border-white/10 bg-white bg-white/10 p-2 align-middle">
                                        <p className="mx-4">{skill.name}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.section>
                    </motion.section>
                </div>
            </Container>
        </section>
    );
}
