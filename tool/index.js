const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'outline'); 

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    // Get all file names without extensions
    const iconList = files.map((file) => path.parse(file).name);

    // Create the content for icon-list.js
    const content = `const iconList = ${JSON.stringify(iconList, null, 2)};\n\nexport default iconList;`;

    // Write the content to icon-list.js
    fs.writeFile(path.join(__dirname, '../src/icon-list.js'), content, (writeErr) => {
        if (writeErr) {
            return console.error('Error writing file: ' + writeErr);
        }
        console.log('icon-list.js created successfully!');
    });
});
