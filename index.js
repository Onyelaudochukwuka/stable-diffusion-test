require("dotenv").config();
const stability = require("stability-client");
const uploadImage = require("./cloudinary");

function userArgsGet() {
  const userArgs = process.argv.slice(2);
  if (userArgs.length !== 1) {
    console.log(`Function expected 1 argument: Got ${userArgs.length}`);
    // eslint-disable-next-line quotes
    console.log('Format: node index.js "A stunning house"');
    process.exit(1);
  }
  return userArgs;
}

const userPrompt = userArgsGet();

// generate an image
const api = stability.generate({
  width: 1024,
  height: 1024,
  format: "png",
  prompt: userPrompt[0],
  apiKey: process.env.DREAMSTUDIO_API_KEY,
  outDir: "./images",
});

api.on("image", (args) => {
  uploadImage(args.filePath).then(console.log);
});

api.on("end", (data) => {
  console.log("Generating Complete", data);
});
