import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";
import Title from "./components/Title";
import tempPhoto from './content/tempPhoto.jpg';

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App flex justify-center">
            {init && <Particles options={particlesOptions}/>}
            <Title
                name="Thomas Hladki"
                headshotImgSrc={tempPhoto}
            ></Title>

            
        </div>
        
    );
}

export default App;
