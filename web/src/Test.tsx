import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {}

export const Test: React.FC<Props> = () => {
  const handleTest = async () => {
    const options = {
      address: "http://10.0.1.76:49154",
      action: "1",
    };
    const response = await fetch(
      `${options.address}/upnp/control/basicevent1`,
      {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": 'text/xml; charset="utf-8"',
          SOAPACTION: `"urn:Belkin:service:basicevent:1#SetBinaryState"`,
        },
        body: `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <s:Body>
                          <u:SetBinaryState xmlns:u="urn:Belkin:service:basicevent:1">
                            <BinaryState>${options.action}</BinaryState>
                          </u:SetBinaryState>
                        </s:Body>
                      </s:Envelope>`,
      }
    );
    const xml = await response.text();
    console.log(xml);
  };
  return (
    <>
      <Button onClick={handleTest}>Test</Button>
    </>
  );
};
