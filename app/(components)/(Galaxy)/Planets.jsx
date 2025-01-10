"use client";
import {useDrag} from "react-dnd";
import Image from "next/image";
import {useGalaxyContext} from "@/public/context/GalaxyContent";

const Planets = () => {
    const {planets ,correctDrops} = useGalaxyContext();

    return (
        <>
            {planets.map((planet) => {
                const [{isDragging}, drag] = useDrag({
                    type: "planet",
                    item: {name: planet.name, image: planet.image},
                    collect: (monitor) => ({
                        isDragging: !!monitor.isDragging(),
                    }),
                });

                return (
                    <div
                        ref={drag}
                        key={planet.id}
                        className={`rounded-full w-20 h-20 ${isDragging ? "opacity-50" : "opacity-100"}
                         flex justify-center items-center cursor-pointer
                         ${correctDrops[planet.name] && "hidden"}
                         `}
                    >
                        <Image src={planet.image} alt={planet.name} width={200} height={200} />
                    </div>
                );
            })}
        </>
    );
};

export default Planets;
