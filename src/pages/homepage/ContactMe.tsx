import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function ContactMe() {
    const socials: {
        name: string;
        url: string;
        username: string;
        icon: JSX.Element;
    }[] = [
        {
            name: "Github",
            username: "raazi-muhammed",
            url: "https://github.com/raazi-muhammed",
            icon: <Github size="1em" />,
        },
        {
            name: "Linkedin",
            username: "raazimuhammed",
            url: "https://www.linkedin.com/in/raazimuhammed/",
            icon: <Linkedin size="1em" />,
        },
        {
            name: "Email",
            username: "raazi6163@gmail.com",
            url: "mailto:raazi6163@gmail.com",
            icon: <Mail size="1em" />,
        },
    ];

    return (
        <section id="contact-me" className="bg-default-50/50 py-8">
            <Container>
                <Heading>Contact Me</Heading>
                <section className="grid grid-cols-3 gap-4">
                    {socials.map((social) => (
                        <Card>
                            <CardBody className="flex flex-row gap-2">
                                <div className="my-auto h-fit w-fit rounded-full bg-primary/20 p-4 text-primary">
                                    {social.icon}
                                </div>
                                <div className="my-auto">
                                    <small className="flex text-default-500">
                                        {social.name}
                                    </small>
                                    <Link href={social.url}>
                                        <p>{social.username}</p>
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </section>
            </Container>
        </section>
    );
}
