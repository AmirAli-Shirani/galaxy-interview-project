"use client";
import {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import useOptions from "@/public/assets/utils/particleOptions";
import {loadFull} from "tsparticles";


const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useOptions()
    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }
};

export default Particle;
