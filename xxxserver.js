const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const butter = require('buttercms')('d672d0309334b66a302cf2e1649e7079200ee39b');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/blog', function(req, res) {

  butter.post.list({page: 1, page_size: 10}).then(function(response) {

    return res.send(response.data)
  });

});

app.get('/blog/p/:page', function(req, res) {
  butter.post.list({page: 1, page_size: 10}).then(function(response) {

    return res.send(response.data)
  });
});

app.get('/blog/:slug', function(req, res) {
  var slug = req.headers.slug;

  butter.post.retrieve(slug).then(function(resp) {
    return res.send(resp.data)
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
