# BlogApp
BlogApp is a react native appp. In this app, User will be able to create, update and delete blog. We have use json-server and ngrok to store user's blogs. I will explain futher down below.

Main focus is to grip the concepts of useContext hook. We are using json-server and ngrok to store user's blogs. We are using axios to communicate between server and our app.
The main focus is to learn basics concepts of React Native.
## Installation

Download code and one last thing Place **jsonserver** folder outside the app folder.

In BlogApp folder run: 
```bash
   npm install
```
In jsonserver folder run:    

```bash
   npm install
```

## Features

- Show list of user blog posts
- Create new blog post
- Update the existing blog post
- Delete the specific blog post
- Store blog posts in local server using json-server and ngrok


## Screenshots
![App Screenshot1](https://github.com/alihaxan020/BlogApp/blob/main/images/Screenshot1.PNG?raw=true)
![App Screenshot2](https://github.com/alihaxan020/BlogApp/blob/main/images/Screenshot2.PNG?raw=true)

![App Screenshot3](https://github.com/alihaxan020/BlogApp/blob/main/images/Screenshot3.PNG?raw=true)
![App Screenshot4](https://github.com/alihaxan020/BlogApp/blob/main/images/Screenshot4.PNG?raw=true)


## BlogApp setup
You have to run local server in order to show user blogs posts. You have to run json-server and ngrik using terminal.

In order to run json-server server run using this command: 

```bash
npm run db
```
in order to run ngrok server will have to run this command: 

```bash
npm run tunnel
```

Some changes needed before run the app. you will have to require some changes in jsonServer file.

located in project directory **src/api/jsonServer.js** 

```javascript
import axios from 'axios';

export default axios.create({
  baseURL: 'http://7383-206-84-155-12.ngrok.io/', //insert your ngrok or localhost address
});

```
After this we can run your app.

## Contact me

If you feel any difficulty regarding setup. Feel free to contact me. I am here to help you.

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][3.1]][3]


<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png (twitter icon without padding)
[2.2]: http://i.imgur.com/fep1WsG.png (facebook icon without padding)
[3.2]: http://i.imgur.com/9I6NRUm.png (github icon without padding)


<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: https://twitter.com/alihaxan07
[2]: https://www.facebook.com/alihaxan020
[3]: http://www.github.com/alihaxan020

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

  
## Developed by

- [@alihaxan020](https://github.com/alihaxan020)

  
