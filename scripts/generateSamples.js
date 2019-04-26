/**
 * Generate playground samples for all locales.
 */

const { mkdirAsync, readDirAsync, readFileAsync, writeFileAsync } = require('./utils');

const dot = require('dot');
dot.templateSettings.strip = false;
dot.templateSettings.append = false;

const path = require('path');
const SRC_PATH = path.resolve(__dirname, '..', 'src');
const SAMPLES_PATH = path.resolve(__dirname, '..', 'samples');
const PRODUCTS = ['anychart', 'anygantt', 'anymap', 'anystock'];


/**
 * Main function.
 */
async function main() {
    const files = await readDirAsync(SRC_PATH, 'utf8');
    const localeNames = files.map(fileName => fileName.replace('.js', ''));
    for (const product of PRODUCTS) {
        let productPath = path.resolve(SAMPLES_PATH, product);
        await mkdirAsync(productPath, { recursive: true });
        let templateString = await readFileAsync(path.resolve(__dirname, 'templates', `${product}.html`));
        let templateProcessor = dot.template(templateString);
        console.log(`Generating ${product} samples.`);
        for (const locale of localeNames) {
            let htmlContent = templateProcessor({ locale });
            let htmlPath = path.resolve(productPath, `${locale}.html`);
            await writeFileAsync(htmlPath, htmlContent);
        }
    }
}

main().catch(err => {
    console.log(err);
    process.exit(1);
});
