const express = require("express");
const cors = require("cors");
const mongo = require("./mongo");
const { dbconnect, audioConnect, videoConnect } = mongo;

const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());

app.post("/images", async (req, res) => {
  const result = await dbconnect();
  const resp = result.insertOne({ data: req.body });
  res.send(resp);
});

app.get("/images", async (req, res) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/audio", async (req, res) => {
  const result = await audioConnect();
  const resp = result.insertOne({ data: req.body });
  res.send(resp);
});

app.get("/audio", async (req, res) => {
  let data = await audioConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/video", async (req, res) => {
  const result = await videoConnect();
  const resp = result.insertOne({ data: req.body });
  res.send(resp);
});

app.get("/video", async (req, res) => {
  let data = await videoConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server Listening on port 5000");
});
