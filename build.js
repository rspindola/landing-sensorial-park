const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const filesToMinify = [
  './src/assets/scripts/jquery-3.7.1.js',
  './src/assets/scripts/slick.js',
  './src/assets/scripts/lightbox.js',
  './src/assets/scripts/main.js'
];

const outputFilePath = path.join(__dirname, './src/dist/scripts/output.js');

(async () => {
  let combinedCode = '';

  for (const file of filesToMinify) {
    if (file.startsWith('http')) {
      // For external files, use fetch
      const response = await fetch(file);
      combinedCode += await response.text();
    } else {
      // For local files, read them directly
      combinedCode += fs.readFileSync(path.resolve(__dirname, file), 'utf8');
    }
  }

  const minifiedCode = await minify(combinedCode);

  fs.writeFileSync(outputFilePath, minifiedCode.code, 'utf8');
  console.log('JavaScript has been minified and saved to output.js');
})();
