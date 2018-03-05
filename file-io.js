#!/usr/bin/env node
'use strict';

const fs = require('fs');

const [,,filePath] = process.argv;

const writeFile = () => {
  try {
    let data = fs.readFileSync(filePath);
    process.stdout.write(data + '\n');
  } catch(err) {
    console.log('Error', err.stack);
  }
}

// exit if no argument passed in
if  (!filePath) {
  process.exit();
} else { 
  writeFile();
}   
