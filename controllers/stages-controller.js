module.exports = {

  index: function GET(request, response) {
    response.view('stages/index', {});
  }

};