var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    // Insert code to do whatever with sum here.
    console.log('The sum is', number);
}

rl.question('Enter hash: ', function (x) {
    rl.question('Enter your discord name: ', function (y) {
        var sum = parseFloat(x) + 100 * 21;

        processSum(sum)

        rl.close();
    });
});



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('your answer is ' + sum);
}).listen(8070);
