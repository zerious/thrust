#!/usr/bin/env node
if (process.mainModule == module) {
  require('./common/process/cli')();
}

var thrust = module.exports;

// Expose the version number, but only load package JSON if it's requested.
Object.defineProperty(thrust, 'version', {
  get: function () {
    return require(__dirname + '/package.json').version;
  }
});
