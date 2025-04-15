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
        repository: "https://github.com/JuanchiFranco/photo-plus"
    },
    {
        title: "Codegen QR Barcodes",
        status: "finished",
        description: "CodeGen is a web application that allows you to generate, customize and export QR codes and barcodes.",
        image: codegen,
        alt: "CodeGen Picture",
        repository: "https://github.com/JuanchiFranco/codegen-qr-barcodes"
    },
    {
        title: "Interactive CMS",
        status: "in progress",
        description: "CMS to manage interactive content such as quizzes, surveys and mini-games.",
        image: interactiveCMS,
        alt: "Interactive CMS Picture",
        repository: "https://github.com/JuanchiFranco/interactive-cms"
    },
    {
        title: "Future Project",
        status: null,
        description: "Stay tuned for my next exciting project!",
        image: comingSoonImage,
        alt: "Coming Soon",
        repository: null
    }
]