var count = 0;
var main = [];
function run(str) {
  
  if (count == 10) {
   if(main.length==0){
     console.log("Empty String")
   }else{
    console.log(main.join(""));
   }
     count = 0;
     main = [];
  } 
  else 
  {
    main = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] != str[i + 1] && str[i] != str[i - 1]) {
        main.push(str[i]);
      
      }
    }
    count++;    
    str = main;
    run(str);
  }
}


function runProgram(input) { 
	var input_split = input.split("\n");
   for(var i=1; i<input_split.length; i++){
   var str= input_split[i].split("")
   run(str)
     }  
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