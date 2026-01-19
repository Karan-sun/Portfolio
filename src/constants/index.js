import  google_dev  from "../assets/images/google_dev.png";
import api from "../assets/icons/api.svg";
import bus from "../assets/icons/bus.svg";
import cpp from "../assets/icons/cpp.svg";
import gesture from "../assets/icons/gesture.svg";
import weather from "../assets/icons/weather.svg";
import python from "../assets/icons/python.svg";
import sql from "../assets/icons/sql.svg";
import tensorflow from "../assets/icons/tensorflow.svg";
import opencv from "../assets/icons/opencv.svg";
import pandas from "../assets/icons/pandas.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import linkedin from "../assets/icons/linkedin.svg";
import contact from "../assets/icons/contact.svg";
import sas from "../assets/icons/sas.svg";
import falcons from "../assets/images/falcons.png";


export const skills = [
    { imageUrl: python, name: "Python", type: "Programming" },
    { imageUrl: cpp, name: "C++", type: "Programming" },
    { imageUrl: sql, name: "SQL", type: "Database" },

    { imageUrl: tensorflow, name: "Machine Learning", type: "AI/ML" },
    { imageUrl: opencv, name: "Computer Vision", type: "AI/ML" },
    { imageUrl: pandas, name: "Data Analysis", type: "AI/ML" },

    { imageUrl: git, name: "Git & GitHub", type: "Tools" },
    { imageUrl: api, name: "REST APIs", type: "Backend" },
    { imageUrl: sas, name: "SAS / SAS Viya", type: "Analytics" },

    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
];

export const experiences = [
    {
        title: "AI Intern",
        company_name: "Falcons – Beyond Imagination",
        icon: falcons,
        iconBg: "#020617",
        date: "Remote",
        points: [
            "Worked on Python-based AI and ML solutions for practical use cases.",
            "Improved prediction accuracy using optimized ML techniques.",
            "Participated in model testing and evaluation for deployment readiness.",
        ],
    },
    {
        title: "Core Team Member",
        company_name: "Google Developer Group – On Campus",
        icon: google_dev,
        iconBg: "#1e293b",
        date: "Sep 2024 – Mar 2025",
        points: [
            "Led weekly technical sessions promoting coding and development culture.",
            "Collaborated with peers on workshops, events, and tech initiatives.",
            "Ranked Top 10 among 200 participants in Google Gen AI Study Jams.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Karan-sun',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/karan-maloo-a492043a0',
    }
];

export const projects = [
    {
        iconUrl: bus,
        theme: "btn-back-blue",
        name: "Bus Tracking System",
        description:
            "A full-stack real-time bus tracking platform designed to improve public transport efficiency. Features secure authentication, live location tracking, schedule updates, and role-based interfaces for drivers and passengers.",
        link: "https://github.com/Karan-sun/Bus-Tracking-System",
        technologies: ["Python", "HTML", "CSS", "JavaScript"],
    },
    {
        iconUrl: weather,
        theme: "btn-back-green",
        name: "Weather Forecast Application",
        description:
            "GUI-based weather forecasting application providing real-time alerts, hourly and 5-day forecasts using OpenWeather API. Includes city-based input and visual trend analysis.",
        link: "https://github.com/Karan-sun/Weather-Forecast",
        technologies: ["Python", "Tkinter", "Pandas", "OpenWeather API"],
    },
    {
        iconUrl: gesture,
        theme: "btn-back-purple",
        name: "Hand Gesture Recognition System",
        description:
            "Real-time AI-powered hand gesture recognition system using computer vision. Enables touchless interaction through accurate gesture classification with visual feedback.",
        link: "https://github.com/Karan-sun/Hand-Gesture-Recognition",
        technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    },
];