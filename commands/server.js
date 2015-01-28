module.exports = {

  description: 'Run a Thrust server',

  options: [
    '-d, --dir            Workspace directory',
    '-e, --env <name>     Server environment ("debug", "dev", "test", "stage" or "prod") [prod]',
    '-p, --port <number>  Server HTTP port [32123]'
  ],

  run: function (options) {
    var env = process.env;
    var dir = options.dir || process.cwd();
    env.LIGHTER_DIR = __dirname.replace(/[\/\\]commands$/, '');
    env.LIGHTER_APP = env.LIGHTER_DIR + '/app';
    env.THRUST_PORT = options.port;
    env.WORKSPACE_DIR = dir.replace(/[]\/\\]$/, '');
    require('../node_modules/lighter/commands/_spawn')(options.env);
  }

};
