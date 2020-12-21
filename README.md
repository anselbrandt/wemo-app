# Wemo Switch Remote App

![Wemo Switch](https://github.com/anselbrandt/wemo-app/blob/master/wemo.jpeg?raw=true)

I have 6 first genereation Wemo Switches. They work okay. Like a lot of cloud connected IoT devices, the offical Wemo app insists on connecting to the cloud to control my devices locally. This can be annoying if there are network issues, or the Wemo cloud server is unresponsive. You shouldn't have to connect to the internet to use a light switch.

As of 2020, you are now required to log in to the Wemo app to control your devices, and your authentication seems to expire at random intervals. This was enough to compel me to write my own Wemo app. Turns out, it's not that hard. Fortunately, Wemo uses an open API and standard protocols. You can read about them [here](https://github.com/anselbrandt/wemo-app/blob/master/src/wemo.md).

If you want to use this app, you need some type of server on your local network that is capable of running [Node.js](https://nodejs.org/en/). A Raspberry Pi would make an ideal candidate, or any desktop that is always on.

The server will act as a bridge to your devices, and serve a single-page web app you can access from any computer or device on your network.

Currently, the app is not full-featured, and limited to triggering On/Off events You will still need the official app to set up your devices, access over the cloud, or use more advanced features. Feel free to fork this repo and add any feature you like.

![Screenshot](https://github.com/anselbrandt/wemo-app/blob/master/screenshot.png?raw=true)

Once installed, you should be able to see something like this. If all your devices don't immediately appear, refresh the page.

## Requirements

[Node.js](https://nodejs.org/en/)

[Yarn](https://classic.yarnpkg.com/en/docs/install)

## How to use

### Using `npx degit`

Execute [`npx degit`](https://github.com/Rich-Harris/degit) to download:

```bash
npx degit https://github.com/anselbrandt/wemo-app wemo-app
```

Then:

```
cd wemo-app
yarn
&&
yarn start
```

## Develop

The server can be run in dev mode by executing `yarn watch` and `yarn dev` in two separate console tabs or windows.

The web app, which was built with [create-react-app](https://create-react-app.dev) can be run in dev mode by executing:

```
cd web
yarn start
```

However, as it relies on the server, it was simpler to have the server run in dev mode, and re-execute `yarn build` on the front-end, rather than eject from `create-react-app` and/or run a custom react script.

### Express React Typescript

This application was built on an Express-React-Typescript scaffold available at [github.com/anselbrandt/express-react-ts](https://github.com/anselbrandt/express-react-ts)
