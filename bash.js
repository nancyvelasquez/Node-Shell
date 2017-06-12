var commands = require('./commands')

var done = function(output){
    process.stdout.write('' + output);
    process.stdout.write('\nprompt > ');
};


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd.startsWith('echo'))  commands['echo'](cmd.slice(5), done);
  else if(cmd.startsWith('cat'))  commands['cat'](cmd.split(' ').slice(1), done);
  else if(cmd.startsWith('head'))  commands['head'](cmd.slice(5), done);
  else if(cmd.startsWith('tail'))  commands['tail'](cmd.slice(5), done);
  else commands[cmd](null, done);

});
