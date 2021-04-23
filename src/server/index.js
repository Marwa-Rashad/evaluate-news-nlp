const dotenv = require('dotenv');
dotenv.config();
//var path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
const axios = require('axios')

//console.log(`Your API key is ${process.env.API_KEY}`);

//const mockAPIResponse = require('./mockAPI.js')

app.use(cors())
app.use(express.json())

app.use(express.static('dist'))

console.log(__dirname)
// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})
//app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
  //  res.sendFile(path.resolve('src/client/views/index.html'))
//})



app.get('/check', async function (req, res) {
    var url  = req.query.url;
    console.log(req.query)
try {
    const result = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
    
    const { agreement, subjectivity, confidence } = result.data;
 
    res.send( { agreement, subjectivity, confidence });
} catch (error) {
console.log(error)
}

})
