# about

this is a VR project

# install and run

- run `npm i` after cloning from git
- generate certificate for https server (needed by webXR). Hit your terminal with:
  1. `openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365`
  2. `openssl rsa -in keytmp.pem -out key.pem`
- start server `node express.js`
- get firefox nightly for Oculus
- visit https://localhost:3001 - ignore warnings and continue to site
  1. you need the public ip for the VR headset
