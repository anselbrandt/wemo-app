import * as dotenv from "dotenv";
dotenv.config();
import internalIp from "internal-ip";
import express from "express";
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
  console.log(ip);
  devices.forEach((device) => {
    subscribe({ address: device.address, ip: ip!, port: PORT });
  });

  const eventListener = express();

  eventListener
    .use(parser.xml())
    .all("/wemo", (request, response) => {
      const sid = request.headers.sid;
      const binaryState = request.body["e:propertyset"]["e:property"][0];
      console.log(sid, binaryState);
      response.sendStatus(200);
    })
    .listen(PORT, () => console.log(`Event listener running on ${PORT}`));
};

main().catch((error) => console.error(error));
