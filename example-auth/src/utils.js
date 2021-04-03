import * as Appwrite from 'appwrite'

const appwrite = new Appwrite()
appwrite
  .setEndpoint('https://appwrite.intellibrain.ch/v1')
  .setProject('6068631cdcace')

export { appwrite }
