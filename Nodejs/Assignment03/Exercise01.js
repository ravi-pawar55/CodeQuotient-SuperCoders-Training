
const fs = require('fs');

const copyFile = (srcDir, destDir, fileExtension) => {

  if (!fs.existsSync(destDir)) {

    fs.mkdirSync(destDir);

  }

  if(!fs.existsSync(srcDir)) {

    console.log("Source directory does not exist");

    process.exit(1);

  }

  const search = (dir) => {

    fs.readdirSync(dir).forEach((file) => {

      const filePath = dir + '/' + file;

      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {

        search(filePath);

      } else if (stat.isFile() && file.endsWith(fileExtension)) {

        fs.copyFileSync(filePath, destDir + '/' + file);

      }

    });

  }

  search(srcDir);
}

const src = 'C:/Users/Ravindra Pawar/Desktop/@Dreams/SuperCoder/Assignment03/Source'
const dest = 'C:/Users/Ravindra Pawar/Desktop/@Dreams/SuperCoder/Assignment03/Destination';
const fileType = '.txt';

copyFile(src,dest,fileType);
 