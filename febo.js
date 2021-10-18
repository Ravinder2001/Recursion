function runProgram(input) {
    var sum=0
 function  febo(n){
     if (n == 0 || n == 1) {
		return n;
	}
	return febo(n - 1) + febo(n - 2);
 }
 console.log(febo(input))

} 
process.stdin.resume();
process.stdin.setEncoding('ascii');
let read = '';
process.stdin.on('data', function (input) {
	read += input;
});
process.stdin.on('end', function () {
	read = read.replace(/\n$/, '');
	runProgram(read);
});
process.on('SIGINT', function () {
	read = read.replace(/\n$/, '');
	runProgram(read);
	process.exit(0);
});