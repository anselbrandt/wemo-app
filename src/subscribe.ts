const fetch = require("node-fetch");

interface Options {
  address: string;
  ip: string;
  port: string | number;
}

export const subscribe = async (options: Options) => {
  const response = await fetch(`${options.address}/upnp/event/basicevent1`, {
    method: "SUBSCRIBE",
    headers: {
      CALLBACK: `<http://${options.ip}:${options.port}/wemo/>`,
      NT: "upnp:event",
      TIMEOUT: "Second-600",
    },
  });
  console.log("Subscribed to: ", response.headers.get("sid"));
  return response.headers.get("sid");
};
