const fs = require('fs');
const { promisify } = require('util');
const childProcess = require('child_process');
const exec = promisify(childProcess.exec);


const mkdirAsync = promisify(fs.mkdir);
const readDirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile)
const writeFileAsync  = promisify(fs.writeFile);
const getVersion = async function getVersion() {
    const { stdout } = await exec('node -p "require(\'./package.json\').version"'); 
    return stdout.trim();
};

module.exports = {
    getVersion,
    mkdirAsync,
    readDirAsync,
    readFileAsync,
    writeFileAsync
}
