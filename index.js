const http = require("http");
const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.end("Hello World");
});
var genres = [
  { id: 1, name: "horror" },
  { id: 2, name: "Romantic" }
];
// console.log(genres);
app.get('/api/genres', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send(genres);
})
app.get('/api/genres/:id', (req, res) => {
  if (req.params.id > genres.length) {
    res.send("Error");
    console.log("Reached");
  } else {
    res.setHeader('content-type', 'plain/text');
    var genre = genres.find((element) => {
      return parseInt(req.params.id) === element.id;
    })
    res.send(genre.name);
  }
})
app.post('/api/genres', (req,res) => {
  // console.log("i am here ");
  console.log(req.body);
  var genre = {
    id: genres.length + 1, 
    name: req.body.name  
  };
  // console.log(genre);
  genres.push(genre);
  res.send(genre);
})


const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is listen on {PORT} `);
});
