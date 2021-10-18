var length =1
 function count(str,chr){
       if(str[chr+1]==undefined){
       console.log(length)
	}
  else
    {
        length++
		count(str,chr+1)
 }
}

function runProgram(input){
    var newInput = input.split("");
  var input= newInput
  var index=0
   count(input,index)
   
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
 read += input;
});
process.stdin.on("end", function () {
 read = read.replace(/\n$/,"")
runProgram(read);
});
process.on("SIGINT", function () {
 read = read.replace(/\n$/,"")
 runProgram(read);
 process.exit(0);
});