import internalIp from "internal-ip";
import { Client } from "node-ssdp";
import fetch from "node-fetch";
import xml2js from "xml2js";
// import express from "express";
// import bodyParser from "body-parser";

async function discover() {
  const client = new Client({});
  const devices = new Set();
  client.on("response", function inResponse(headers: any): any {
    const address = headers.LOCATION;
    devices.add(address.replace("/setup.xml", ""));
  });
  client.search("urn:Belkin:device:controllee:1");
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
  client.stop();
  return Array.from(devices);
}

enum Prop {
  Name = "name",
  State = "state",
}

interface Get {
  address: string;
  prop: Prop;
}

async function get({ address, prop }: Get) {
  try {
    let action;
    switch (prop) {
      case "name":
        action = "FriendlyName";
        break;
      case "state":
        action = "BinaryState";
        break;
    }
    const response = await fetch(`${address}/upnp/control/basicevent1`, {
      method: "post",
      headers: {
        "Content-Type": 'text/xml; charset="utf-8"',
        SOAPACTION: `"urn:Belkin:service:basicevent:1#Get${action}"`,
      },
      body: `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
              <s:Body>
                  <u:Get${action} xmlns:u="urn:Belkin:service:basicevent:1"></u:Get${action}>
              </s:Body>
            </s:Envelope>`,
    });
    const xml = await response.text();
    const json = await xml2js.parseStringPromise(xml);
    const value =
      json["s:Envelope"]["s:Body"][0][`u:Get${action}Response`][0][
        `${action}`
      ][0];
    if (prop === "state") {
      return Number(value);
    } else {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
}

const main = async () => {
  const ip = await internalIp.v4();
  console.log(ip);
  const addresses = await discover();
  console.log(addresses);
};

main().catch((error) => console.error(error));
