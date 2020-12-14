import express from "express";
import http from "http";
const path = require("path");
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../web/build")));

  app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname + "../web/build/index.html"));
  });

  app.get("/api", (_, res) => {
    res.send("Hello from the API server.");
  });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((error) => {
  console.error(error);
});
