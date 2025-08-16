#!/usr/bin/env node
import fs from 'fs';
import Ajv from 'ajv';
import YAML from 'yaml';

const schema = JSON.parse(fs.readFileSync('specs.schema.json', 'utf8'));
const specs = YAML.parse(fs.readFileSync('specs.yaml', 'utf8'));

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);
const ok = validate(specs);

if (!ok) {
  console.error('specs.yaml validation failed:');
  console.error(validate.errors);
  process.exit(1);
}

console.log('specs.yaml is valid.');
