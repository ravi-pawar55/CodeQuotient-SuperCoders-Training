const https   = require('https');
const fs = require('fs');

fs.readFile('./urls.txt','utf8',function(err,data){
    if(err){
        console.log("An Error Occured");
    }else{
        var urls = data.split('\n');
        urls = urls.map(function(url){
            return url.replace('\r','');
        })
        urls.forEach(function(url,ind){
            getRequest(url,ind);
        })
    }
});

function getRequest(url,ind){
    return new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(`./outputFile${ind+1}.json`);
        https.get(url,function(res){
            res.on('data', (chunk)=>{
                writeStream.write(chunk);
            })
            res.on('end', ()=>{
                writeStream.end();
                resolve();
            })


        }).on('error',(error)=>{
            reject(error);
        })
    })
}