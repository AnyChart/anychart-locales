const { rollup } = require('rollup');
const path = require('path');

const { getVersion, readDirAsync } = require('./utils');


/**
 * Returns an array of rollup plugins for different build format.
 * @param {string} format Build format(cjs, iife).
 * @return {Array.<Object>} Plugins array.
 */
function getPlugins(format) {
    if (format == 'cjs') return [];
    return [
        {
            // removes ES6 export from source file for iife build.
            transform(code) {
                return code.replace('export default locale;', '');
            }
        }
    ];
}


/**
 * Returns input options for rollup.
 * @param {string} localeName Name of the locale.
 * @param {string} format Build format(cjs, iife).
 * @return {Object} Rollup config.
 */
function getInputOptions(localeName, format) {
    const input = path.resolve(__dirname, '..', 'src', `${localeName}.js`);
    const plugins = getPlugins(format);
    return {
        input,
        plugins,
    }
}


/**
 * Returns banner(header) for locale js-file 
 * @param {string} localeName Name of the locale.
 * @param {string} version Version of the locale.
 * @param {string} fullYear Year of build date.
 * @param {string} fullMonth Month of build date.
 * @param {string} fullDate Date of build date.
 * @return {string} Header for locale file.
 */
function getBanner(localeName, version, fullYear, fullMonth, fullDate) {
    const buildDate = `${fullYear}-${fullMonth}-${fullDate}`;
    return `/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Locale: ${localeName}
 * Version: ${version} (${buildDate})
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com ${fullYear}. All rights reserved.
 */`;
}


/**
 * Returns output options for rollup
 * @param {string} localeName Name of the locale.
 * @param {string} format Build format(cjs, iife).
 * @param {string} banner File header.
 * @return {Object} Rollup config.
 */
function getOutputOptions(localeName, format, banner) {
    const cjs = (format == 'cjs');
    const filename = cjs ? 'index.js' : `${localeName}.js`;
    const file = path.resolve(__dirname, '..', cjs ? `cjs/${localeName}` : 'dist', filename);
    
    return {
        file,
        format,
        banner,
    }
}

/**
 * Build single locale.
 * @param {string} localeName Name of the locale.
 * @param {string} format Build format(cjs, iife).
 * @param {string} version Version of the locale.
 * @param {string} fullYear Year of build date.
 * @param {string} fullMonth Month of build date.
 * @param {string} fullDate Date of build date.
 */
async function buildLocale(localeName, format, version, fullYear, fullMonth, fullDate) {
    try {
        const banner = getBanner(localeName, version, fullYear, fullMonth, fullDate);
        const inputOptions = getInputOptions(localeName, format);
        const outputOptions = getOutputOptions(localeName, format, banner);
        const { file } = outputOptions;

        console.log(`- Creating: ${format.padStart(4)} (${file})`);
        const bundle = await rollup(inputOptions);
        await bundle.write(outputOptions);
    } catch (error) {
        console.log(`Errors occuired building: ${localeName}`);
        throw error;
    }
}


/**
 * Main function.
 * Build locales from sources to CJS and IIFE format.
 */
async function buildLocales() {
    const version = await getVersion();
    const localesToBuild = process.argv.slice(2);
    const fileNames = await readDirAsync(path.resolve(__dirname, '../src'));
    let localeNames = fileNames.map(fileName => fileName.replace('.js', ''));
    if (localesToBuild.length) {
        localeNames = localeNames.filter(localeName => localesToBuild.indexOf(localeName) != -1);
    }
    
    const now = new Date();
    const startTime = now.getTime();
    const fullYear = now.getUTCFullYear();
    const fullMonth = String(now.getUTCMonth() + 1).padStart(2, '0');
    const fullDate = String(now.getUTCDate()).padStart(2, '0');
    for (let localeName of localeNames) {
        console.log(`\n# Building: ${localeName}`);
        await buildLocale(localeName, 'cjs', version, fullYear, fullMonth, fullDate);
        await buildLocale(localeName, 'iife', version, fullYear, fullMonth, fullDate);
    }
    const endTime = Date.now();
    const buildTime = ((endTime - startTime) / 1000).toFixed(1);
    console.log(`\nBuild time (${localeNames.length} locales): ${buildTime} s.`);
}

buildLocales().catch(err => {
    console.log(err);
    process.exit(1);
});
