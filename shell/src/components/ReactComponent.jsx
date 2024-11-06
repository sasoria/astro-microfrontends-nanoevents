import React from "react";
import MicroFrontendA from "http://localhost:7100/bundle.js";
import { createNanoEvents } from "nanoevents";

const ReactComponent = () => {
    const emitter = createNanoEvents();

    emitter.on("loaded", loaded => {
        if (loaded) {
            console.info("Emitting authenticated event from shell...")
            emitter.emit("authenticated", true);
        }
    });

    return <MicroFrontendA emitter={emitter} />;
}

export default ReactComponent;
