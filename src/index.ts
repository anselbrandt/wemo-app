import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
const path = require("path");
import bodyParser from "body-parser";
import bodyParserXml from "body-parser-xml";
import internalIp from "internal-ip";
import { getDevices } from "./getDevices";
import { subscribe } from "./subscribe";
import { setDevice } from "./setDevice";

const PORT = process.env.PORT || 4000;

const main = async () => {
  bodyParserXml(bodyParser);
  const parser: any = bodyParser;

  const encode = (string: string) => {
    const noSpace = string.toLowerCase().replace(/\s/g, "-");
    return encodeURI(noSpace);
  };

  const devicesMap = new Map();

  const devices = await getDevices();
  console.log(devices);
  const ip = await internalIp.v4();
  console.log("server ip:", ip);
  devices.forEach((device) => {
    const name = encode(device.name);
    devicesMap.set(name, {
      name: device.name,
      address: device.address,
      endpoint: `/api/${name}`,
      state: device.state,
    });
    subscribe({ address: device.address, ip: ip!, port: `${PORT}` });
  });

  const app = express();
  app.use(express.static(path.join(__dirname, "../web/build")));

  app.get("/api", async (_, res) => {
    const devicesNames = Array.from(devicesMap.values()).map((device) => ({
      name: device.name,
      endpoint: `/api/${device.endpoint}`,
      state: device.state,
    }));
    res.send(devicesNames);
    const devices = await getDevices();
    console.log(devices);
    const ip = await internalIp.v4();
    console.log("server ip:", ip);
    for (const index in devices) {
      const name = await encode(devices[index].name);
      await devicesMap.set(name, {
        name: devices[index].name,
        address: devices[index].address,
        endpoint: name,
        state: devices[index].state,
      });
      await subscribe({
        address: devices[index].address,
        ip: ip!,
        port: `${PORT}`,
      });
    }
  });

  app.get("/api/:device/", function (req, res) {
    res.send(`${req.params.device} light status`);
  });

  app.get("/api/:device/:state/", function (req, res) {
    const device = req.params.device;
    const state = req.params.state;
    if (state === "on" || state === "off") {
      const address = devicesMap.get(device).address;
      setDevice({ address: address, state: state });
      res.send("ok");
    } else {
      res.send("whoops");
    }
  });

  app.use(parser.xml()).all("/wemo", (request, response) => {
    const sid = request.headers.sid;
    if (sid) {
      const binaryState = request.body["e:propertyset"]["e:property"][0];
      console.log(sid, binaryState);
      response.sendStatus(200);
    } else {
      response.send("whoops");
    }
  });

  app.get(["/", "/*"], (_, res) => {
    res.sendFile(path.join(__dirname, "../web/build/index.html"));
  });

  const httpServer = http.createServer(app);
  httpServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((error) => console.error(error));
