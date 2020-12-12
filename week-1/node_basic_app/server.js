console.log("Is this my first node project?");

const myHttp = require("http");

const myServer = myHttp.createServer((request, response) => {
  console.log(`Request URL is: ${request.url}`);
  if (request.url === "/") {
    response.write("You requested localhost:3000 my friend");
    response.end();
  } else if (request.url === "/ptwd2020oct") {
    response.write(`
      Sebastian
      Rachel
      Christian
      Ana
      Ana 2
      Ida
      Michael
      Felix
      `);
    response.end();
  } else {
    response.write("You are requiring non-existant route 404");
    response.end();
  }
});

myServer.listen(3000, () => console.log(`I am on port 3000!`));
