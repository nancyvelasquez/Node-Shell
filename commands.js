var fs = require('fs');

// module.exports = {
//   pwd: function() {
//     process.stdout.write('' + process.env.PWD);
//     process.stdout.write('\nprompt > ');
//   },
//   date: function() {
//     process.stdout.write('' + new Date());
//     process.stdout.write('\nprompt > ');
//   }
// };

exports.pwd = function() {
    process.stdout.write('' + process.env.PWD);
    process.stdout.write('\nprompt > ');
};

exports.date = function() {
    process.stdout.write('' + new Date());
    process.stdout.write('\nprompt > ');
};

exports.ls = function(){
  process.stdout.write('' + fs.readdirSync('.').join('\n'));
  process.stdout.write('\nprompt > ');
};
