const express = require('express');
const router = express.Router();

const Url = require('../models/Url')

router.get('/:code', (req, res) => {

  try{
    const url = Url.find(elem=>
      elem.urlCode===req.params.code
    );
    if(url) {
      return res.redirect(url.longUrl);
    }
    else {
      return res.status(404).json('Url not found');
    }
  }
  catch (err) {
    res.status(400).json('Server error');
  }
});

module.exports = router;
