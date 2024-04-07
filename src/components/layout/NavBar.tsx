import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";
import { Lightbulb, SquareKanban, UserRoundSearch } from "lucide-react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            maxWidth="2xl"
            style={{ zIndex: 99999 }}
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="#" className="text-white">
                        <p className="font-bold text-inherit">Raazi</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden gap-8 lg:flex">
                    <div className="flex gap-2">
                        <SquareKanban size="1.2em" className="my-auto" />
                        <Link href="#projects" className="text-white">
                            Project
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Lightbulb size="1.2em" className="my-auto" />
                        <Link href="#skills" className="text-white">
                            Skills
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <UserRoundSearch size="1.2em" className="my-auto" />
                        <Link href="#contact-me" className="text-white">
                            Contact me
                        </Link>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu style={{ zIndex: 99999 }} className="dark">
                <NavbarMenuItem className="grid gap-2">
                    <Link href="#projects" className="text-white">
                        Project
                    </Link>

                    <Link href="#skills" className="text-white">
                        Skills
                    </Link>

                    <Link href="#contact-me" className="text-white">
                        Contact me
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
