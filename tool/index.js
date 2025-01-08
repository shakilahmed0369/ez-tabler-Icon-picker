const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'outline');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }
    
    const iconList = files
        .filter(file => !file.startsWith('.'))
        .map((file) => `ti ti-${path.parse(file).name}`);

    const content = `const iconList = ${JSON.stringify(iconList, null, 2)};\n\nexport default iconList;`;

    fs.writeFile(path.join(__dirname, '../src/icon-list.js'), content, (writeErr) => {
        if (writeErr) {
            return console.error('Error writing file: ' + writeErr);
        }
        console.log('icon-list.js created successfully!');
    });
});