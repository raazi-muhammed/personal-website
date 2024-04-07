import { Card } from "@nextui-org/react";
import { AppWindowMac, Laptop, Palette } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";

export default function Skills() {
    const mainSkills: {
        name: string;
        icon: JSX.Element;
    }[] = [
        {
            name: "Software development",
            icon: <Laptop size="1.5em" />,
        },
        {
            name: "Graphic design",
            icon: <Palette size="1.5em" />,
        },
        {
            name: "UI/UX",
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
                <section className="grid grid-cols-3 gap-4">
                    {mainSkills.map((skill) => (
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="flex flex-row gap-3 p-4 align-middle">
                            <div className="my-auto h-fit rounded-full bg-primary/20 p-4 text-primary">
                                {skill.icon}
                            </div>
                            <section>
                                <p className="my-auto me-3">{skill.name}</p>
                                <small className="text-default-500">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Iusto totam error dolorem
                                </small>
                            </section>
                        </Card>
                    ))}
                </section>
                <br />
                <section className="flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <Card
                            radius="lg"
                            className="flex w-fit flex-row gap-3 rounded-large border-1 border-white/20 bg-white bg-white/10 p-2 align-middle">
                            <p className="mx-4">{skill.name}</p>
                        </Card>
                    ))}
                </section>
            </Container>
        </section>
    );
}
