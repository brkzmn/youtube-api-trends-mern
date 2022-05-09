import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

// Allow cross-origin

const app = express();
app.use(cors());
const API_KEY = process.env.API_KEY;
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=tr&videoCategoryId=17&key=${API_KEY}
const baseApiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=${API_KEY}
`;

// app.use(express.static("public"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

app.get("/", (req, res) => {
  res.send("Welcome Youtube trend videos");
});

app.get("/youtube/trends/:country?/:category?", async (req, res) => {
  const country = req.params.country;
  const category = req.params.category;
  console.log(country, category);

  let url;

  if (category) {
    url = `${baseApiUrl}&maxResults=10&regionCode=${country}&videoCategoryId=${category}`;
  } else {
    url = `${baseApiUrl}&maxResults=10&regionCode=${country}`;
  }
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=tr&videoCategoryId=17&key=${API_KEY}`
  );
  const data = await response.json();
  console.log(url);
  res.json(data);
  res.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
