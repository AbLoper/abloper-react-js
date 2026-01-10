import uxuiImg from '../assets/carousel/uxui.jpg'
import frontendImg from '../assets/carousel/frontend.jpg'
import backendImg from '../assets/carousel/backend.jpg'
import mobileappImg from '../assets/carousel/mobileapp.jpg'
import mongodbImg from '../assets/carousel/mongodb.jpg'
import aiImg from '../assets/carousel/ai.jpg'

import figmaIcon from "../assets/icons/topics/figma.png"
import reactIcon from "../assets/icons/topics/react.png"
import nodeIcon from "../assets/icons/topics/node.png"
import reacrNativeIcon from "../assets/icons/topics/react native.png"
import mongodbIcon from "../assets/icons/topics/mogodb.png"
import chatgptIcon from "../assets/icons/topics/chatgpt.png"

const topicsContent =
    [
        {
            "id": "1",
            "icon": figmaIcon,
            "backgroundImage": uxuiImg,
            "title": "UX/UI Design",
            "description": "I design clean, modern, and user-friendly intercaces using Figma, with a focus on usability, accessibility, and clarity wireframes:",
            "paragraphs": [
                "High-fidelity UI",
                "Interactive prototypes",
                "Full Design Systems ready for development"
            ],
            "footer": "I blend creative thinking with practical implementation strategies to ensure that every design is intuitive and visually appealing:"
        },
        {
            "id": "2",
            "icon": reactIcon,
            "backgroundImage": frontendImg,
            "title": "Front-End Development",
            "description": "I build responsive, high-performance user interfaces using React, Next.js, JavaScript, and TypeScript. Clean component architecture:",
            "paragraphs": [
                "Optimized performance & SEO",
                "Smooth animations and transitions",
                "Pixel-perfect UI based on Figma designs",
                "Excellent user experience across all devices"
            ],
            "footer": "I bring design to life with scalable, maintainable, and production-ready front-end code."
        },
        {
            "id": "3",
            "backgroundImage": backendImg,
            "icon": nodeIcon,
            "title": "Back-End Development",
            "description": "I develop robust and scalable back-end systems using Node.js, Express.js, and MongoDB. Building RESTful APIs:",
            "paragraphs": [
                "Secure authentication & authorization",
                "Database design and optimization",
                "Cloud-ready architecture",
                "Efficient communication between front-end and back-end"
            ],
            "footer": "I ensure the system is secure, stable, and performs efficiently under real-world usage."
        },
        {
            "id": "4",
            "backgroundImage": mobileappImg,
            "icon": reacrNativeIcon,
            "title": "Mobile App Development",
            "description": "I build modern, high-performance mobile applications using React Native, supporting both iOS and Android. Smooth and intuitive navigation:",
            "paragraphs": [
                "Responsive layouts that adapt to all screen sizes",
                "API integration and real-time data handling",
                "Secure login flows",
                "Optimized and maintainable codebase"
            ],
            "footer": "I focus on delivering mobile experiences that are fast, reliable, and enjoyable for users."
        },
        {
            "id": "5",
            "backgroundImage": mongodbImg,
            "icon": mongodbIcon,
            "title": "MongoDB Database Management",
            "description": "I design and manage scalable databases that ensure efficiency, security, and reliability. I create flexible and well-structured schemas tailored to application needs.",
            "paragraphs": [
                "Optimize queries and indexing for high performance and fast response times.",
                "Build and integrate RESTful APIs with Node.js  and Express using MongoDB.",
                "Ensure secure data handling, backups, and monitoring for production-ready systems."
            ],
            "footer": "I develop MongoDB solutions that scale with your business and deliver consistent results."
        },
        {
            "id": "6",
            "backgroundImage": aiImg,
            "icon": chatgptIcon,
            "title": "Artificial Intelligence Integration",
            "description": "I harness the power of AI to accelerate development, enhance user experience, and bring innovative solutions to life.",
            "paragraphs": [
                "I use advanced tools like ChatGPT, GitHub Copilot, and Gemini to streamline coding, generate smart suggestions, and optimize workflows.",
                "My approach combines creativity with automation, ensuring faster delivery and higher-quality results.",
                "I integrate AI into both design and development, making applications more intuitive, efficient, and future-ready.",
                "With AI-driven insights, I can analyze user behavior, improve usability, and deliver personalized digital experiences."
            ],
            "footer": "I integrate AI to transform ideas into smart digital solutions."
        }
    ]

export default topicsContent;