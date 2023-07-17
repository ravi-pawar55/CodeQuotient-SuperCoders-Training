const fs = require('fs');

const filePath = 'C:/Users/Ravindra Pawar/Desktop/@Dreams/SuperCoder/Assignment03/Exercise02.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error in reading the file:', err);
  } else {
    console.log('File Contents:');
    console.log(data);
  }
});
