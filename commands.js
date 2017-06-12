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

exports.pwd = function(arg, done) {
    done(process.env.PWD);
};

exports.date = function(arg, done) {
    done(new Date());
};

exports.ls = function(arg, done){
  // print(fs.readdirSync('.').join('\n'));
   fs.readdir('.', (err, files) => {if(err) done(err); else (done(files.join('\n'))) })
};

exports.echo = function(arg, done){
    if(arg === '$PATH') done(process.env.PATH);
    else done(arg);
};

exports.cat = function(arg, done){
    var str = '';
    arg.forEach(function(element){
        fs.readFile(process.env.PWD +'/' + element, (err, data) => {if(err) done(err);
        else done(data)});
    });

    // done(data);

};

exports.head = function(arg, done){
    fs.readFile(process.env.PWD +'/' + arg, 'utf-8', (err, data) => {if(err) done(err);
        else done(data.split('\n').slice(0, 5).join('\n'));});

};

exports.tail = function(arg, done){
    fs.readFile(process.env.PWD +'/' + arg, 'utf-8', (err, data) => {if(err) done(err);
    else done(data.split('\n').slice(data.split('\n').length - 5).join('\n'));});

};


