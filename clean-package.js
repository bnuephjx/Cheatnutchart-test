// https://stackoverflow.com/questions/40942495/clean-package-json-before-packing
// 在npm发包之前之前这个命令，可以优化package.json再进行npm publish
const fs = require('fs-extra');
const path = require('path');

const pkg = fs.readJSONSync(path.resolve(__dirname, 'package.json'));

delete pkg.scripts;
delete pkg.devDependencies;

fs.writeFileSync(path.resolve(__dirname, 'package.json'), JSON.stringify(pkg, null, 2));