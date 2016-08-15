var fs = require('fs');
var comments = JSON.parse(fs.readFileSync('MOCK_DATA.json').toString());

module.exports = {getComments};

function getComments(req, res) {
  res.status(200).json(comments);
}
