const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssImport,
    postcssPresetEnv,
    postcssNested,
  ],
};
