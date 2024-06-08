const {readFile, writeFile} = require('fs');

readFile('./content/inner/file.txt','utf8',(err,result)=>{
    if(err) {
        throw err;
        return;
    } else {

    writeFile('ins.txt',`${result}`,err=>{
        if(err) throw err;
    });
}
});