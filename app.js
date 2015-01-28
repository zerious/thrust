require(__dirname + '/common/string/colors');

var cwd = process.cwd();

var App = require(__dirname + '/node_modules/lighter')({

  dir: __dirname,

  logger: [{transport: 'console'}],

  configPath: cwd + '/.thrust.json',

  httpPort: process.env.THRUST_PORT,

  processCount: 1,

  exposeGlobals: true,

  asciiArt: ['',
    '           _~ooO@@'.white + '   _____ _                    _'.bold.gray,
    '         /O@'.white + '/@@\\'.yellow +  '@@ '.white + ' |_   _| |__  _ __ _   _ ___| |_'.bold.gray,
    '        @@@@'.white + '\\@@/'.yellow +  '@/'.white + '    | | | \'_ \\| \'__| | | / __| __|'.bold.gray,
    '      /@@@@@@@@@/'.white + '     | | | | | | |  | |_| \\__ \\ |_'.bold.gray,
    '  _o@@@@@@@@@@"'.white + '       |_| |_| |_|_|   \\__,_|___/\\__|'.bold.gray,
    ' /@@@@@@@@@@"'.white + '      ',
    '|@""'.white + '/'.red + '@@\\'.yellow + ''.red + '@@@@'.white + '       ',
    '   /@'.red + '@/'.yellow + '@'.red + '@@@|'.white + '       ',
    '   @O%"'.red + ' |@/'.white + '        ',
    ''],

  scripts: {
    '/a.js': [
      'node_modules/lighter/node_modules/jymin/plugins/md5.js',
      'scripts'
    ],
  }

});
