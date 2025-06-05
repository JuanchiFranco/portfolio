import photoPlus from "../assets/projects/phot_plus.jpg";
import codegen from "../assets/projects/CodeGen.jpg";
import interactiveCMS from "../assets/projects/Interactve_cms.jpg";
import comingSoonImage from "../assets/coming-soon.svg";
import unitConverter from "../assets/projects/converter.jpg";
import amiducielShop from "../assets/projects/AmiducielHome.jpg";

export const projects = [
    {
        title: "ShopAmiduciel",
        status: "en progreso",
        description: "Plataforma de comercio electrónico para Amiduciel, con un frontend moderno en React y un backend en Strapi (CMS headless).",
        image: amiducielShop,
        alt: "ShopAmiduciel",
        repository: "https://github.com/JuanchiFranco/Shop-Amiduciel",
        technologies: [
            { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
            { name: "Axios", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/axios.svg" },
            { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/strapi.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" }
        ],
        liveDemo: null
    },
    {
        title: "Conversor de Unidades",
        status: "completado",
        description: "Una página web receptiva organizada en secciones separadas para cada categoría de medida, como longitud, peso y temperatura, donde los usuarios pueden ingresar un valor, elegir las unidades de origen y destino mediante menús desplegables y ver instantáneamente el resultado convertido.",
        image: unitConverter,
        alt: "Conversor de Unidades",
        repository: "https://github.com/JuanchiFranco/unit-converter",
        technologies: [
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" }
        ],
        liveDemo: "https://unit-converter-beryl-delta.vercel.app/"
    },
    {
        title: "Photo Plus",
        status: "completado",
        description: "Photo-plus es un plugin para Strapi que permite tomar fotografías con la cámara y guardarlas en una carpeta de la máquina local.",
        image: photoPlus,
        alt: "Photo-plus",
        repository: "https://github.com/JuanchiFranco/photo-plus",
        technologies: [
            { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/strapi.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" }
        ],
        liveDemo: null
    },
    {
        title: "Generador de Códigos QR y Barras",
        status: "completado",
        description: "CodeGen es una aplicación web que permite generar, personalizar y exportar códigos QR y códigos de barras.",
        image: codegen,
        alt: "CodeGen",
        repository: "https://github.com/JuanchiFranco/codegen-qr-barcodes",
        technologies: [
            { name: "Express", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
        ],
        liveDemo: null
    },
    {
        title: "CMS Interactivo",
        status: "en progreso",
        description: "Sistema de gestión de contenido para administrar contenido interactivo como cuestionarios, encuestas y mini-juegos.",
        image: interactiveCMS,
        alt: "CMS Interactivo",
        repository: "https://github.com/JuanchiFranco/interactive-cms",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
            { name: "Javascript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
            { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/strapi.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" }
        ],
        liveDemo: null
    },
    {
        title: "Próximo Proyecto",
        status: null,
        description: "¡Mantente atento para mi próximo proyecto emocionante!",
        image: comingSoonImage,
        alt: "Próximo Proyecto",
        repository: null,
        technologies: [],
        liveDemo: null
    }
];