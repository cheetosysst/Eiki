// index.js
//     Check what task to do.

const target = process.argv[2];
require(target ? `./src/tools/${target}` : './src/app');