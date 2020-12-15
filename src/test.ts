import { getDevices } from "./getDevices";

const main = async () => {
  const devices = await getDevices();
  console.log(devices);
};

main().catch((error) => console.error(error));
