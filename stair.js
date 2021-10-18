function runProgram(input) {
    
  function numOfWays(N){
    if (N<0){
        return 0
} if (N == 0){
        return 1
    } else{ return numOfWays(N-1) + numOfWays(N-2) + numOfWays(N-3)
}
}
console.log(numOfWays(input))
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