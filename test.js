const fs = require('fs');

const content = 'Some content!';

fs.writeFile('in.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
     console.log('file written successfully')
  }
});
