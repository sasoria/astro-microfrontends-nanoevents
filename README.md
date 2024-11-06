# astro-microfrontends-nanoevents

This example shows how to communicate between the shell and a microfrontend, but can also be extended to show communication across microfrontends. This is done by sending events across 
applications with [nanoevents](https://www.npmjs.com/package/nanoevents).

## Shell

The shell creates an emitter and waits for the Microfrontend to be loaded. Once it's loaded it emits an event called 
`authenticated` with its value set to true.

```js
const emitter = createNanoEvents();

    emitter.on("loaded", loaded => {
        if (loaded) {
            emitter.emit("authenticated", true);
        }
    });

    return <MicroFrontendA emitter={emitter} />
```
    
## Microfrontend
The microfrontend  listens on the `authenticated` event and prints the value of it once it's sent by the shell. 
It also emits a `loaded` event to tell that it's successfully loaded in.

```js
const MicroFrontend = ({ emitter }) => {
    emitter.on("authenticated", isAutheticated => {
        console.info("Authenticated value: " + isAutheticated);
    });

    emitter.emit("loaded", true);
    return <App />;
}
```


