const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbconnect = async () => {
  const result = await client.connect();
  let db = result.db("upload");
  return db.collection("images");
};

const audioConnect = async () => {
  const result = await client.connect();
  let db = result.db("upload");
  return db.collection("audios");
};

const videoConnect = async () => {
  const result = await client.connect();
  let db = result.db("upload");
  return db.collection("videos");
};

module.exports = {
    dbconnect,
    audioConnect,
    videoConnect,
};
