# InfoscreenJS
This is an information screen written in JS. It can display the content of several urls by looping over an array.
The given array must contain an object with the url to be loaded and a timeout.

## Installation
The application can be deployed in various ways. This description focus on an installation on a linux distribution an 
a firefox browser.

### Build
Install ```nodejs``` and ```npm``` packet manager first. After the installation run ```npm run build```. With the command ```npm start``` the 
application will be build and started.

### Deploy
Copy all files from the dist folder to your preferred location. Open a terminal an navigate to this location. 

Install ```pm2``` on your distribution and start the server. If the server should start automatic, generate a startup
command and run it as root. The instructions are given below.
```
npm install pm2 -g
pm2 start server.js
pm2 startup
```
Run the given command as root.
```
pm2 save
```

### Firefox configuration
If you like to use this application in full screen mode, us a firefox. The attribute below in the firefox config must 
be set to false.

Open the config from your firefox by tipping ```about:config``` in the address bar.

Set the attribute to false: 
```
full-screen-api.allow-trusted-requests-only = false
```

## How to use
A folder named ```resources``` is located in the deployed directory. This folder must contain a file called 
```resources.json```. The content of the file describes the resources to load on the information screen an how 
long this resources should be displayed. The description is a json array with multiple objects. The objects must 
contain two attributes, one is ```res``` with the url as value and the second is ```timeout``` with the timeout in
milliseconds. An example is given below.

```json
[
  {"timeout": 5000, "res": "https://nodejs.org/en/"},
  {"timeout": 10000, "res": "https://webpack.github.io/"}
]
```

## Limitations
If you like to display third party websites, you can do this only if the website allows you to display the website in a 
frame. Otherwise you will reach an error like ```Load denied by X-Frame-Options: 'URL' does not permit framing.```