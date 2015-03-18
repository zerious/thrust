module.exports = {

  index: function GET(request, response) {
    response.view('packages/index', {});
  }

};