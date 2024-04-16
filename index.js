require('dotenv')
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello wolrd");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`server running on ${port}`);
});
