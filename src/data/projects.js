import photoPlus from "../assets/projects/phot_plus.jpg";
import codegen from "../assets/projects/CodeGen.jpg";
import interactiveCMS from "../assets/projects/Interactve_cms.jpg";
import comingSoonImage from "../assets/coming-soon.svg";

export const projects = [
    {
        title: "Photo Plus",
        status: "finished",
        description: "The photo-plus is a strapi plugin that allows you to take pictures with your camera and download them to the folder on your local machine.",
        image: photoPlus,
        alt: "Photo-plus Picture",
        repository: "https://github.com/JuanchiFranco/photo-plus",
        technologies: [
            { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/strapi.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" }
        ]
    },
    {
        title: "Codegen QR Barcodes",
        status: "finished",
        description: "CodeGen is a web application that allows you to generate, customize and export QR codes and barcodes.",
        image: codegen,
        alt: "CodeGen Picture",
        repository: "https://github.com/JuanchiFranco/codegen-qr-barcodes",
        technologies: [
            { name: "express", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
        ]
    },
    {
        title: "Interactive CMS",
        status: "in progress",
        description: "CMS to manage interactive content such as quizzes, surveys and mini-games.",
        image: interactiveCMS,
        alt: "Interactive CMS Picture",
        repository: "https://github.com/JuanchiFranco/interactive-cms",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
            { name: "Javascript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
            { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/strapi.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" }
        ]
    },
    {
        title: "Future Project",
        status: null,
        description: "Stay tuned for my next exciting project!",
        image: comingSoonImage,
        alt: "Coming Soon",
        repository: null,
        technologies: []
    }
];