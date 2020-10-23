const express = require("express");
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})
app.post('/addusers', (req,res) => {
    return  res.status(200).json({
            status: 'Success'
                })
})
