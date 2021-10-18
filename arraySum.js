function findSum(str, length)
    {
        if (length <= 0){
            return 0;
        }else{
            
        }
        return (findSum(str, length - 1) + str[length - 1]);
    }

function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length;i=i+2){
        var data= newInput[i].split(" ").map(Number)
        var N= data.length
        console.log(findSum(data,N))
    }

  
   
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