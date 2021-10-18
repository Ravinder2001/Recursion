var pointer = 0;
var stack = [];
function famousSum(array, num) {
	if (array.length != 1) {
		stack = [];
		var res = 0;
		for (var i = 0; i < array.length; i++) {
			res += array[i];
		}
		if (pointer != 0) {
			stack.push(res);
		} else {
			stack.push(res * num);
		}
		var main = stack.join('').split('').map(Number);
		pointer++;
		famousSum(main);
	} else {
		console.log(stack.join());
	}
}

function runProgram(input) { 
	//var newInput=input.split("\n");
   var arr= input.split(" ")[0]
     var data= arr.split("").map(Number)
   var target= Number(input.split(" ")[1])
     famousSum(data,target)
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