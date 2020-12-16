import * as dotenv from "dotenv";
dotenv.config();
import internalIp from "internal-ip";
import express from "express";
import http from "http";
const path = require("path");
import bodyParser from "body-parser";
import bodyParserXml from "body-parser-xml";
import { getDevices } from "./getDevices";
import { subscribe } from "./subscribe";

const PORT = process.env.PORT || 4000;

const main = async () => {
  bodyParserXml(bodyParser);
  const parser: any = bodyParser;

  const devices = await getDevices();
  console.log(devices);
  const ip = await internalIp.v4();
  console.log("server ip:", ip);
  devices.forEach((device) => {
    subscribe({ address: device.address, ip: ip!, port: `${PORT}` });
  });

  const app = express();
  app.use(express.static(path.join(__dirname, "../web/build")));
  app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname + "../web/build/index.html"));
  });

  app.get("/api", (_, res) => {
    res.send("hello from the API server.");
  });

  app.get("/api/:device/:state/", function (req, res) {
    res.send(`${req.params.device} light state ${req.params.state}`);
  });

  app.use(parser.xml()).all("/wemo", (request, response) => {
    const sid = request.headers.sid;
    if (sid) {
      const binaryState = request.body["e:propertyset"]["e:property"][0];
      console.log(sid, binaryState);
      response.sendStatus(200);
    } else {
      response.send("hello from the API server.");
    }
  });

  const httpServer = http.createServer(app);
  httpServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((error) => console.error(error));
