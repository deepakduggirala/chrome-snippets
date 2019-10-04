var fs = require('fs');
function readLinesSync(filename) {
  let content = fs.readFileSync(filename, 'UTF8')
  return content.split('\n').filter(l => l !== '');
}