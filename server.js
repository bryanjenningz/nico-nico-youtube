var express = require('express');

var app = express();
app.use(express.static('dist'));
app.use('/api', require('./api/routers/index'));

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
