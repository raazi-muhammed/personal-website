import { Github, Globe, Workflow } from "lucide-react";

export const projects: {
    name: string;
    description: string;
    date: string;
    preview?: string;
    readmeMeLink: string;
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
        readmeMeLink: "/markdown/projects/omniflow.md",
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
        readmeMeLink: "/markdown/projects/shop-nexus.md",
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
        readmeMeLink: "/markdown/projects/react-connect-div.md",
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
        readmeMeLink: "/markdown/projects/alma-foods.md",
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
        readmeMeLink: "/markdown/projects/sorting-visualizer.md",
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
        readmeMeLink: "/markdown/projects/rastreo.md",

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
