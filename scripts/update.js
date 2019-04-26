/**
 * Script used once to reformat source locales to es6.
 * There is no point in it anymore.
 */

const { readDirAsync, readFileAsync, writeFileAsync } = require('./utils');

const prettier = require('prettier');

const path = require('path');
const SRC_PATH = path.resolve(__dirname, '..', 'src');


/**
 * Returns footer for locale.
 * @param {string} locale
 * @return {string}
 */
function getFooter(locale) {
    return `window['anychart'] = window['anychart'] || {};
window['anychart']['format'] = window['anychart']['format'] || {};
window['anychart']['format']['locales'] = window['anychart']['format']['locales'] || {};
window['anychart']['format']['locales']['${locale}'] = locale;

export default locale;\n`
}


/**
 * Returns content of the es6 locale file;
 */
function getContent(localeContent, fileName) {
    const footer = getFooter(fileName);
    return `${localeContent}\n\n${footer}`
}


/**
 * Prettifies locale code.
 */
function prettify(code) {
    return prettier.format(code, { parser: 'babylon' });
}


/**
 * Main function.
 */
async function main() {
    const files = await readDirAsync(SRC_PATH, 'utf8');
    const fileNames = files.map(fileName => fileName.replace('.js', ''));
    const filePaths = files.map(fileName => path.resolve(SRC_PATH, fileName));
    for (let i = 0; i < files.length; i++) {
        try {
            console.log(`${String(i + 1).padStart(String(files.length).length, '0')} of ${files.length}: ${filePaths[i]}`);
            const fileContent = await readFileAsync(filePaths[i], { encoding: 'utf8' });
            const content = fileContent.split('\n').slice(1).join('\n');
            const localeContent = `const locale = {\n${content}\n`;
            const prettified = prettify(localeContent);
            const writeContent = getContent(prettified, fileNames[i]);
            await writeFileAsync(filePaths[i], writeContent);
        } catch (e) {
            console.log(`Something wrong with ${filePaths[i]}`);
            process.exitCode = 1;
            throw e;
        }
    }
}

main();
