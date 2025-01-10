"use client"
import {createContext, useContext, useState} from 'react';
import {toast} from "react-toastify";

const GalaxyContext = createContext();

const planets = [
    {id: 1, name: "Earth", image: "/assets/images/earth.png", width: 660, height: 660, planetAngle: 220},
    {id: 2, name: "Mercury", image: "/assets/images/mercury.png", width: 560, height: 560, planetAngle: 480},
    {id: 3, name: "Venus", image: "/assets/images/venus.png", width: 460, height: 460, planetAngle: 20},
    {id: 4, name: "Jupiter", image: "/assets/images/Jupiter.png", width: 360, height: 360, planetAngle: 300},
    {id: 5, name: "Saturn", image: "/assets/images/saturn.png", width: 260, height: 260, planetAngle: 600},
    {id: 6, name: "Uranus", image: "/assets/images/uranus.png", width: 160, height: 160, planetAngle: 150},
    {id: 7, name: "Neptune", image: "/assets/images/neptune.png", width: 80, height: 80, planetAngle: 0},
];

export const GalaxyContextProvider = ({children}) => {
    const [correctDrops, setCorrectDrops] = useState({});

    const handleDrop = (item, targetPlanetName) => {
        const isCorrect = item.name === targetPlanetName;
        if (isCorrect) {
            toast.success("سیاره در جای درست خود قرار گرفت!", {icon: "✅"});
        } else {
            toast.error("سیاره در جای اشتباهی قرار گرفت!", {icon: "🔄"});
        }

        setCorrectDrops((prev) => ({
            ...prev,
            [item.name]: isCorrect,
        }));
    };

    return (
        <GalaxyContext.Provider value={{correctDrops, setCorrectDrops, handleDrop, planets}}>
            {children}
        </GalaxyContext.Provider>
    );
};

export const useGalaxyContext = () => {
    const context = useContext(GalaxyContext);
    if (!context) {
        throw new Error("useGalaxyContext must be used within a GalaxyContextProvider");
    }
    return context;
};
