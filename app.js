var lighter = require('lighter');

// Use single argument to set the processCount.
var args = process.argv.slice(2);
var processCount = isNaN(args[0]) ? 2 : args[0];

// Create a new Lighter app.
module.exports = lighter({

  log: [{transport: 'console'}],

  port: 32123 || process.env.THRUST_PORT,

  processCount: 1,

  dbs: {
    thrust: {
      host: '127.0.0.1',
      user: 'root',
      audit: true
    }
  },

  globalCase: 'camel',

  asciiArt: ['',
    '           _~ooO@@'.base.bold + '   _____ _                    _'.bold.gray,
    '         /O@'.bold + '/@@\\'.bold.yellow +  '@@ '.bold + ' |_   _| |__  _ __ _   _ ___| |_'.bold.gray,
    '        @@@@'.bold + '\\@@/'.bold.yellow +  '@/'.bold + '    | | | \'_ \\| \'__| | | / __| __|'.bold.gray,
    '     _/@@@@@@@@@/'.bold + '     | | | | | | |  | |_| \\__ \\ |_'.bold.gray,
    ' _oo@@@@@@@@@@"'.bold + '       |_| |_| |_|_|   \\__,_|___/\\__|'.bold.gray,
    '/@@@@@@@@@@@"'.bold + '      ',
    '@*"'.bold + 'o'.bold.red + '/@@\\'.bold.yellow + ''.bold.red + '@@@@'.bold + '       ',
    '  o@'.bold.red + '@@/'.bold.yellow + '@'.bold.red + '@@@|'.bold + '       ',
    '  #@@%"'.bold.red + ' @@/'.bold + '        ',
    ''],

  rings: {
    thrust: {
      replicas: 3
    }
  }

});
