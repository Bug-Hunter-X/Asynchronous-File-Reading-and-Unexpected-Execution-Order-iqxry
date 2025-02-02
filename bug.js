```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return;
    }
    // Process the file data here...
    console.log('File processed successfully.');
  });
  console.log('File reading initiated.');
}

processFile('./myFile.txt');
```