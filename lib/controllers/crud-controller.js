var Controller = require('lighter/lib/controller');

var CrudController = module.exports = Controller.extend({

  index: function GET(request, response) {
    response.view(this.plural + '/index', {});
  },

  edit: function GET(request, response) {
    var query = request.query;
    var id = query.id;
    var context = {};
    // TODO: Get from the model.
    context[this.singular] = {id: id};
    response.view(this.plural + '/edit', context);
  }

});