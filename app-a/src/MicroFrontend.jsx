import React from "react";
import App from "./App";

const MicroFrontend = ({ emitter }) => {
    console.info("Listening on authenticated event from shell...");

    emitter.on("authenticated", isAutheticated => {
        console.info("Authenticated value: " + isAutheticated);
    });

    emitter.emit("loaded", true);
    return <App />;
}

export default MicroFrontend;
