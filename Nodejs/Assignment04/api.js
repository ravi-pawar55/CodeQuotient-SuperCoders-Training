const readline = require('readline');
const https = require('https');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your Github username: ', (userName) => {

const apiUrl = `https://api.github.com/users/${userName}`;
const options = {
    headers: {
        'User-Agent': 'MyGitHubApp (ravindrapawar5502@gmail.com)'
    }
};
const outputFile = 'C:/Users/Ravindra Pawar/Desktop/@Dreams/SuperCoder/Nodejs/Assignment04/output.json'; 

const fileStream = fs.createWriteStream(outputFile);

https.get(apiUrl, options, (response) => {
  response.setEncoding('utf8');

  response.on('data', (chunk) => {
    fileStream.write(chunk);
  });

  response.on('end', () => {
    fileStream.end();
    console.log('Data retrieved and saved to file successfully.');
  });
}).on('error', (error) => {
  console.error('Error retrieving data:', error);
});

rl.close();
});
