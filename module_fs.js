const {readFileSync,writeFileSync} = require('fs');

    const first = readFileSync(`${__dirname}/content/subfolder/test.txt`,'utf8');
   // console.log(first);
   const second = writeFileSync('test.txt',first);
   console.log('File created');