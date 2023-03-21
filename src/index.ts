import fs from 'node:fs'
(async function main() {
  if (process.argv.length !== 4) throw new Error('Please pass an environment & then a host')
  else {
    const PATH = '.env'
    const text = await fs.promises.readFile(PATH, 'utf-8')
    const updated = text
      .replace(/PUBLIC_ENVIRONMENT.+/, `PUBLIC_ENVIRONMENT = '${ process.argv[2] }'`)
      .replace(/PUBLIC_HOST.+/, `PUBLIC_HOST = '${ process.argv[3] }'`)

    await fs.promises.writeFile(PATH, updated)
    console.log('💚 Successfully updated .env file')
  }
})()
