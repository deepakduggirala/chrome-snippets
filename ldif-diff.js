#!/usr/bin/env node

const fs = require('fs')

const decouple = xs => xs.reduce( (acc, curr) => Object.assign(acc, {[curr[0]]: curr[1]}),{});
const intersection = set1 => set2 => new Set([...set1].filter(x => set2.has(x)));
const difference = set1 => set2 => new Set([...set1].filter(x => !set2.has(x)));

function ldif2json(ldif) {
  return decouple(
    ldif
      .replace(/\n /g,'')
      .trim()
      .split('\n')
      .map(l => l.replace(/\:/,'&').split('&'))
    )
}

const args = process.argv.slice(2)

let path_to_ldif1 = args[0]
let path_to_ldif2 = args[1]

ldif1 = fs.readFileSync(path_to_ldif1, 'utf-8')
ldif2 = fs.readFileSync(path_to_ldif2, 'utf-8')

ldif1_obj = ldif2json(ldif1)
ldif2_obj = ldif2json(ldif2)

ldif1_set = new Set(Object.keys(ldif1_obj))
ldif2_set = new Set(Object.keys(ldif2_obj))

console.log(`\nAttributes in LDIF 1 but not in LDIF 2 are \n\n${Array.from(difference(ldif1_set)(ldif2_set)).join('\n')}`)

console.log(`\nAttributes in LDIF 2 but not in LDIF 1 are \n\n${Array.from(difference(ldif2_set)(ldif1_set)).join('\n')}`)

let common_attrs = Array.from(intersection(ldif1_set)(ldif2_set))
let diff_attrs = common_attrs.filter(attr => ldif1_obj[attr] != ldif2_obj[attr])

console.log(`\nAttributes in both LDIF1 and LDIF2 but differ in values are \n\n${diff_attrs.join('\n')}`)