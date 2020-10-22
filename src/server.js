const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
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
    
    console.log('server' + req);
    return  res.status(200).json({
            status: 'Success'
                })
    // const data = {
    //     zipcode: req.body.zipcode
    // }
    // const options = {
    //     provider: 'opencage',
    //     //  apiKey: 'AIzaSyB_-vXmpiBPSC0BYwbvCbjIu4YqI_exVTc' // google  
    //     apiKey: '4ad88fb03c0c4d64a3bcb97ee38408bc', // OpenCage
    // };
    // const geocoder = NodeGeocoder(options);
    // geocoder.geocode(req.body.zipcode)
    //     .then((data) => {
    //         console.log(data[0]);
    //         const location = {
    //             lat: data[0].latitude,
    //             long: data[0].longitude
    //         }
    //       //  return location;
    //       return  res.status(200).json({
    //             location
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(404).json({
    //             status: "Invalid Zipcode provided"
    //         })
    //     })
    
    // // console.log('data in fetch -- ' +  req.body.zipcode);
    // // res.status(200).json({
    // //     location
    // // })
})
