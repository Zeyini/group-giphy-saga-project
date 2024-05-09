const express = require('express');
const router = express.Router();
require('dotenv').config() 
const axios = require('axios')
const API_KEY = process.env.API_KEY
// moved the api to the router to protect out api key. don't have it on the cleint side code.

router.get('/', (req, res) => {
    console.log('API KEY  HERE',API_KEY)
    //we need to find the payload get request from the user
    //save the payload into a string variable
    const searchString = req.data
    console.log('what user searches for', searchString)
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchString}&limit=5`
      })
      .then((response) => {
        const theGifsFromAPI = response.data
        res.send(theGifsFromAPI)
      })
      .catch((error) => {
        console.log('GET /api/gifs failed:', error)
        res.sendStatus(500)
      })
});

module.exports = router;