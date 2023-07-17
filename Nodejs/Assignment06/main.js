const childProcess = require('child_process');
const readLine = require('readline');

const r1 = readLine.createInterface(process.stdin,process.stdout);

function readCommand(){
  r1.setPrompt('Enter a commad to execute or type "exit" : ');
  r1.prompt();
};

function executeCommand(command){
    if (process.platform === "win32") {
        child = childProcess.spawn("cmd", ["/c", command]);
      } else {
        child = childProcess.spawn("ls", ["-a"]);
      }
      
      child.stdout.on("data",(data)=> {
        console.log(data.toString());
      });
      child.stderr.on("data", (data)=> {
         console.error(data.toString())
      });

      child.on("exit", (code)=> {
        console.error(`child process exited with code ${code}`);
        readCommand();
      });
}

r1.on('line',(line)=>{
    const command = line;
    if(command==='exit')
    {
        r1.close();
    }else{
        executeCommand(command);
    }
}).on('close',()=>{
    console.log("Existing.......");
    process.exit(0);
})

readCommand();