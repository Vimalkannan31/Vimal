import React, { useEffect, useState } from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import tailwind from '../assets/Tailwind CSS.png';
import mui from '../assets/mui.png';
import python from '../assets/python.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import bootstrap from '../assets/Bootstrap.png';
import node from '../assets/node-js.png';
import ex from '../assets/express.png';
import mongoose from '../assets/monggose img.png';
import mongo from '../assets/mogodb.png';
import post from '../assets/postgres.png';

const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "TailWind", image: tailwind },
    { name: "Bootstrap", image: bootstrap },
    { name: "Material UI", image: mui },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Node.js", image: node },
    { name: "Express.js", image: ex },
    { name: "Mongoose", image: mongoose },
    { name: "MongoDB", image: mongo },
    { name: "PostgreSQL", image: post },
    { name: "Python", image: python },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
];

function SkillCard() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [theme, setTheme] = useState('light'); // Default theme is light

    // Load theme from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const handleMouseEnter = (index) => {
        setCurrentIndex(index);
    };

    const hideName = () => {
        setCurrentIndex(null);
    };

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <div
                className="w-full flex justify-between animate-rightToLeft"
                style={{
                    width: `${skills.length * 2 * 7}rem`,
                }}
            >
                {[...skills, ...skills,...skills,...skills].map((item, index) => (
                    <>
                    <div
                        key={index}
                        className={`flex flex-col items-center flex-shrink-0 gap-2 mx-5 md:mx-10 text-center 
                        ${
                            theme === 'light'
                                ? 'bg-slate-100 text-textDark shadow-xl'
                                : 'bg-gray-800/70 text-textLight shadow-md'
                        } 
                        backdrop-blur-lg border-none rounded-lg p-4 transition-all`}
                    >
                        <div
                            className="cursor-pointer w-16 h-16 flex justify-center items-center overflow-hidden"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={hideName}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-14 h-14 object-cover rounded-lg"
                            />
                        </div>
                        
                    </div>
                    <div
                            className={`h-5 transition-all duration-300 ${
                                currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p
                                className={`p-[5px] rounded-[10px] text-[12px] font-medium 
                                ${
                                    theme === 'light'
                                        ? 'bg-gray-200 text-gray-800'
                                        : 'bg-gray-700 text-gray-200'
                                }`}
                            >
                                {item.name}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
