// https://stackoverflow.com/questions/40942495/clean-package-json-before-packing
const fs = require('fs');

// create temp directory
const tempDirectory = fs.mkdirSync(`clean`, {
  recursive: true
});

const packageDirectory = `${tempDirectory}/package`;

// create subfolder package
fs.mkdirSync(packageDirectory);

// read existing package.json
const packageJSON = require('./package.json');

// create your own package.json or modify it here
Reflect.deleteProperty(packageJSON, 'scripts');
Reflect.deleteProperty(packageJSON, 'devDependencies');
Reflect.deleteProperty(packageJSON, 'config');

fs.writeFileSync(`${packageDirectory}/package.json`, JSON.stringify(packageJSON, null, 2));