'use sctrict';

function save(req, res) {
  res.send('hello from save');
}

function send(req, res) {
  res.send('hello from send');
}

module.exports.save = save;
module.exports.send = send;
