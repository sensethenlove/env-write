import fs from 'node:fs'

(async function main() {
  const PATH = '.env'
  let text = await fs.promises.readFile(PATH, 'utf-8')
  const lines = text.split(/\r?\n/)

  for (const [ iArgv, request ] of process.argv.entries()) { // loop bash arguments
    if (iArgv > 1) { // skip first few arguments
      let lineFound = false
      const [ key, value ] = request.split('=')

      for (const [ iLine, line ] of lines.entries()) { // loop lines in .env file
        if (line.match(key)) { // if key is found in line
          lineFound = true
          lines[iLine] = `${ key }='${ value }'`
          break
        }
      }

      if (!lineFound) lines.push(`${ key }='${ value }'`) // if line is not found => add line 
    }
  }

  await fs.promises.writeFile(PATH, lines.join('\n'))
  console.log('💚 Successfully updated .env file')
})()
