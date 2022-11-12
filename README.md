# STABLE-DIFFUSION-TEST

A Stable Diffusion Resource API for Text-2-Images actions using Nodejs and StabilityClient SDK.
<br>
<br>
Support for HTTP post request coming soon.


## Usage/Examples
clone git repository
```bash
git clone https://github.com/Onyelaudochukwuka/stable-diffusion-test.git
```

make sure you have node installed, if not visit here [Node for Installation docs](https://nodejs.org/)
<br>
### Install node packages.
Run
```bash
npm install
```
#### Configure Environment Variables
- CLOUDINARY_API_KEY=***
- CLOUDINARY_API_SECRET=***
- CLOUDINARY_CLOUD_NAME=***
- DREAMSTUDIO_API_KEY=***

### Make Request
```bash
node index.js "A stunning house"
```

#### Image stored in cloudinary cloud and saved on local storage.