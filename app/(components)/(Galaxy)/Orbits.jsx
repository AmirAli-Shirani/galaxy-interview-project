"use client";
import PlanetPlace from "@/app/(components)/(Galaxy)/PlanetPlace";
import { useEffect, useState } from "react";
import { useGalaxyContext } from "@/public/context/GalaxyContent";

const Orbits = () => {
    const { planets, handleDrop, correctDrops } = useGalaxyContext();
    const [positions, setPositions] = useState([]);

    // محاسبات موقعیت سیارات
    useEffect(() => {
        const updatedPositions = planets.map((planet) => {
            const radius = planet.width / 2;
            const angleInRadians = (planet.planetAngle * Math.PI) / 180;
            const x = radius * Math.cos(angleInRadians);
            const y = radius * Math.sin(angleInRadians);
            return { ...planet, x, y };
        });
        setPositions(updatedPositions);
    }, [planets]);

    return (
        <>
            {positions.map((planet) => (
                <div
                    key={planet.id}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-400"
                    style={{
                        width: `${planet.width}px`,
                        height: `${planet.height}px`,
                    }}
                >
                    <PlanetPlace
                        x={planet.x}
                        y={planet.y}
                        planetName={planet.name}
                        isPlaced={correctDrops[planet.name]}
                        image={planet.image}
                        onDrop={(item, planetName) => {
                            handleDrop(item, planetName);
                        }}
                        style={{
                            position: "absolute",
                            top: `calc(50% + ${planet.y}px)`,
                            left: `calc(50% + ${planet.x}px)`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            ))}
        </>
    );
};

export default Orbits;
