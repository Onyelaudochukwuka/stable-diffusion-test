require('dotenv').config();
const stability = require('stability-client');
const uploadImage = require('./cloudinary');
// generate an image
const api = stability.generate({
    width: 1024,
    height: 1024,
    format: 'png',
    prompt: "A cartoon House",
    apiKey: process.env.DREAMSTUDIO_API_KEY,
    outDir: "./images",
    
});

api.on('image', ({ buffer, filePath }) => {
    uploadImage(filePath).then(console.log);
})

api.on('end', (data) => {
    console.log('Generating Complete', data)
})