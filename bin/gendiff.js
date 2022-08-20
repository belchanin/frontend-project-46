#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file1 = fs.readFileSync(path.resolve(__dirname, '..', filepath1), 'utf-8');
    const file2 = fs.readFileSync(path.resolve(__dirname, '..', filepath2), 'utf-8');
    const obj1 = JSON.parse(file1);
    const obj2 = JSON.parse(file2);
    if (path.extname(filepath1) === '.json') {
      console.log(genDiff(obj1, obj2));
    }
  })
  .parse();
