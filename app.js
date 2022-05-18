// const express = require("express");
// const app = express();
 
// app.use((req, res)=> {
//   res.send(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Главная</title>
//       <meta charset="utf-8" />
//   </head>
//   <body>
//       <h1>Главная страница</h1>
//       <h3>Привет, Express</h3>
//   </body>
//   <html>`);
// });
// app.listen(3000);
 

// solution 2 sendFile index.html


// const express = require("express");
// const app = express();
 
// app.use(function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });
 
// app.listen(3000);



//! Отправка статусных кодов

const express = require("express");
const app = express();
 
app.use("/home/foo/bar",function (request, response) {
    response.status(404).send(`Ресурс не найден`);
});
 
app.listen(3000);