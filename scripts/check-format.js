import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

function collectJavaScriptFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) return collectJavaScriptFiles(file)
    return entry.isFile() && file.endsWith('.js') ? [file] : []
  })
}

const files = [
  ...collectJavaScriptFiles('src'),
  ...collectJavaScriptFiles('test'),
  ...collectJavaScriptFiles('scripts'),
  'package.json',
  '.editorconfig',
  '.gitattributes',
  '.github/workflows/ci.yml'
].sort()
const problems = []

for (const file of files) {
  // Accept Windows checkouts while applying the same checks to each line.
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  if (!text.endsWith('\n')) problems.push(`${file}: missing final newline`)

  for (const [index, line] of text.split('\n').entries()) {
    const location = `${file}:${index + 1}`
    if (line.includes('\t')) problems.push(`${location}: use spaces, not tabs`)
    if (/\s$/.test(line)) problems.push(`${location}: trailing whitespace`)
    if (file.endsWith('.js') && line.match(/^ */)[0].length % 2 !== 0) {
      problems.push(`${location}: indentation must use multiples of two spaces`)
    }
  }
}

if (problems.length > 0) {
  console.error(problems.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Format checks passed for ${files.length} files`)
}
