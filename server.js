const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
  console.log('Server running on http://localhost:' + port);
});