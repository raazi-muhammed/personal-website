import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../../components/layout/Components";
import Heading from "../../components/layout/Heading";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { defaultAnimation } from "../../utils/animations";

export default function ContactMe() {
    const socials: {
        name: string;
        url: string;
        username: string;
        preview: string;
        icon: JSX.Element;
    }[] = [
        {
            name: "Github",
            username: "raazi-muhammed",
            url: "https://github.com/raazi-muhammed",
            preview: "/images/contact/github.png",
            icon: <Github size="1em" />,
        },
        {
            name: "Linkedin",
            username: "raazimuhammed",
            url: "https://www.linkedin.com/in/raazimuhammed/",
            preview: "/images/contact/linkedin.jpg",
            icon: <Linkedin size="1em" />,
        },
        {
            name: "Email",
            username: "raazi6163@gmail.com",
            url: "mailto:raazi6163@gmail.com",
            preview: "/images/contact/.png",
            icon: <Mail size="1em" />,
        },
    ];

    return (
        <section id="contact-me" className="bg-default-50/50 py-8">
            <Container>
                <Heading>Contact Me</Heading>
                <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {socials.map((social) => (
                        <motion.div
                            variants={defaultAnimation}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            whileTap="tap">
                            <Card
                                radius="lg"
                                isFooterBlurred
                                className="relative">
                                <Image
                                    className="h-32 w-screen object-cover object-right-bottom"
                                    src={social.preview}
                                />
                                <CardFooter className="absolute bottom-2 left-2 z-10 flex w-fit gap-2 rounded-xl border-1 border-white/10 p-2">
                                    <div className="my-auto grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-primary">
                                        {social.icon}
                                    </div>
                                    <div className="my-auto">
                                        <small className="flex text-xs text-default-500">
                                            {social.name}
                                        </small>
                                        <Link
                                            href={social.url}
                                            className="me-2 text-white underline">
                                            <p>{social.username}</p>
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </section>
            </Container>
        </section>
    );
}
