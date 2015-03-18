var app = require('../app');
var ring = app.rings.thrust;

module.exports = {

  index: function GET(request, response) {
    response.view('ring/index');
  },

  set: function GET_POST(request, response) {
    var data = request[request.method == 'GET' ? 'query' : 'body'];
    var key = data.key;
    var value = data.value;
    if (key && value) {
      ring.set(key, value);
    }
    response.view('ring/index', {key: key, value: value});
  },

  get: function GET_POST(request, response) {
    var data = request[request.method == 'GET' ? 'query' : 'body'];
    var key = data.key;
    if (key) {
      var peers = [];
      ring.findPeers(key).forEach(function (peer) {
        peers.push(peer.name);
      });
      ring.get(key, function (value) {
        response.view('ring/index', {key: key, value: value, peers: peers});
      });
    }
    else {
      response.view('ring/index');
    }
  }

};
