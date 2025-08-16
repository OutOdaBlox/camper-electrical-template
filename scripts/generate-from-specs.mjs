#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';
import Handlebars from 'handlebars';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const argv = yargs(hideBin(process.argv))
  .option('spec', { type: 'string', default: 'specs.yaml' })
  .option('outDocsDir', { type: 'string', default: 'docs' })
  .option('outBomDir', { type: 'string', default: 'bom' })
  .argv;

const loadYaml = (p) => YAML.parse(fs.readFileSync(p, 'utf8'));
const compile = (tplPath) => Handlebars.compile(fs.readFileSync(tplPath, 'utf8'));
const write = (p, content) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
};

// Helpers
Handlebars.registerHelper('upper', (s) => String(s).toUpperCase());
Handlebars.registerHelper('join', (arr, sep) => Array.isArray(arr) ? arr.join(sep) : '');

(function main() {
  const specsPath = path.resolve(argv.spec);
  if (!fs.existsSync(specsPath)) {
    console.error(`Specs file not found: ${specsPath}`);
    process.exit(1);
  }
  const specs = loadYaml(specsPath);

  // Render docs
  const instTpl = compile(path.join(__dirname, '..', 'docs', 'templates', 'installation.template.md'));
  const safetyTpl = compile(path.join(__dirname, '..', 'docs', 'templates', 'safety.template.md'));
  const installation = instTpl({ specs });
  const safety = safetyTpl({ specs });
  write(path.join(argv.outDocsDir, 'installation.md'), installation);
  write(path.join(argv.outDocsDir, 'safety.md'), safety);

  // Render BOM
  const bomTpl = compile(path.join(__dirname, '..', 'bom', 'templates', 'bom.template.csv'));
  const bom = bomTpl({ specs });
  write(path.join(argv.outBomDir, 'bom.csv'), bom);

  console.log('Generated docs/installation.md, docs/safety.md, bom/bom.csv from', specsPath);
})();
