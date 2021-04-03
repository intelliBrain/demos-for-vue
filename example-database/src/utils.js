import * as Appwrite from 'appwrite'

const appwrite = new Appwrite()
appwrite
  .setEndpoint('https://appwrite.intellibrain.ch/v1')
  .setProject('6068631cdcace')

let promise = appwrite.account.createSession('test1@intellibrain.33mail.com', '123456');

promise.then(function (response) {
    let json = JSON.stringify(response)
    console.log(`Successfully logged in as: ${json}`); // Success
}, function (error) {
    console.error(error); // Failure
});

export { appwrite }