const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const Url = require('../models/Url')


router.post('/shorten', async (req, res) => {
  const {longUrl} = req.body;
  const baseUrl = config.get('baseUrl')

  var urlCode = shortid.generate();
  if(Url.urlCode){
    while(Url.urlCode.indexOf(urlCode) !== -1){
      urlCode = shortid.generate();
    }
  }
  const shortUrl = baseUrl + '/' +urlCode;
  const url = {
    longUrl: longUrl,
    shortUrl: shortUrl,
    urlCode: urlCode
  };
  Url.push(url);
  res.json(url)

});


module.exports = router;
