var express = require('express');
var router = express.Router();
var apiAdapter = require('./apiAdapter');

const BASE_URL = 'https://rvlabs-echo-api.azurewebsites.net'
const api = apiAdapter(BASE_URL)

const options = {
  headers: {'x-functions-key': ''}
};

/* GET users listing. */
router.get('/echo', function(req, res, next) {
  res.send('respond with a ECHO API');
});

router.post('/api/echo_api', (req, res) => {
  api.post(req.path, req.body, options)
  .then(resp => {
    res.send(resp.data)
  })
  .catch(resp => {
    console.log('Error on backend')
    res.send(resp.data)
  })
})

module.exports = router;
