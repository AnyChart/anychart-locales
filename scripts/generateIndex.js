/**
 * Generates index.es.js file that contains es6 re-exports.
 */

const { readDirAsync, writeFileAsync } = require('./utils');

const path = require('path');
const SRC_PATH = path.resolve(__dirname, '..', 'src');
const INDEX_FILE = path.resolve(__dirname, '..', 'index.es.js');


/**
 * Converts string to snake_case representation.
 * @param {string} value Value to convert to.
 * @return {string} Snake-cased string.
 */
function toSnakeCase(value) {
    return value.replace(/[-]([a-z|\d])/g, (_, match) => '_' + match);
}


/**
 * Returns re-export string for locale.
 * @param {string} localeName The name of the locale.
 * @return {string} ES6 export string.
 */
function getExportString(localeName) {
    const asString = toSnakeCase(localeName);
    return `export { default as ${asString} } from './src/${localeName}';`
}


/**
 * Main function.
 * Generates index.es.js file.
 */
async function main() {
    const files = await readDirAsync(SRC_PATH, 'utf8');
    const localeNames = files.map(fileName => fileName.replace('.js', ''));
    const exports = localeNames.map(localeName => getExportString(localeName))
    await writeFileAsync(INDEX_FILE, `${exports.join('\n')}\n`);
}

main().catch(err => {
    console.log(err);
    process.exit(1);
});
