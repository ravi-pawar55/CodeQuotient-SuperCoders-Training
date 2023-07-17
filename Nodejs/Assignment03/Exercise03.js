const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter input text: ', (inputText) => {
  const filePath = 'C:/Users/Ravindra Pawar/Desktop/@Dreams/SuperCoder/Assignment03/Exercise03Output.txt';

  fs.writeFile(filePath, inputText, (err) => {
    if (err) {
      console.error('Error in writing into file:', err);
    } else {
      console.log('Text has been written into the file successfully.');
    }
    rl.close();
  });
});
