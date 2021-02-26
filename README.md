
# Attack-on-Web(AoW)
![AoW](https://i.imgur.com/XLc696Q.gif)

![build status](https://img.shields.io/github/workflow/status/felixfaisal/attack-on-web/Attack%20on%20Web?style=plastic)
![code size](https://img.shields.io/github/languages/code-size/felixfaisal/attack-on-web?style=plastic)
![issues](https://img.shields.io/github/issues-raw/felixfaisal/attack-on-web?color=red&style=plastic)
![pullrequest](https://img.shields.io/github/issues-pr-closed/felixfaisal/attack-on-web?color=purple&style=plastic)
![stars](https://img.shields.io/github/stars/felixfaisal/attack-on-web?style=plastic)

AttackOn-Web is a CLI application that runs in your local system environment or in a CI environment to assist you with identifying 20 (More added soon) kinds of secret/API Keys, just as other potential security weaknesses or policy breaks. 

AOW utilizes our local APIs to filter your code and identify expected secret/API Keys in your code. We won't store any records you are sending or any secret keys we have recognized.


 - [Test using CLI](#test-using-cli)
 - [Test using GitHub Actions](#test-using-github-actions)
 



## Test using CLI

   ```sh
  npm i atow
  npx atow
  ```
  
   [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner) is a package runner tool that comes with npm 5.2+ and higher.
   
   Commands
Usage: npx atow [OPTIONS]

```
Options:
    -h or  --help       to view list of commands
    -t or  --test       for testing.
    -l or  --list       for list of providers.
  ```
### OUTPUT
If no secrets or policy breaks have been found, the exit code will be 0:

If a secret or other issue is found in your staged code or in your CI, you will have an alert giving you the type of policy break, the filename where the policy break has been found and a patch giving you the position of the policy break in the file:

```js
✔ Read fileD:\MLH\dev-tools\attack-on-web\node_modules\yargs-parser\build\lib\yargs-parser.js
✔ Read fileD:\MLH\dev-tools\attack-on-web\src\check.js
✔ Read fileD:\MLH\dev-tools\attack-on-web\src\checkGitignoreRegex.js
✔ Read fileD:\MLH\dev-tools\attack-on-web\src\crawl.js
✖ Stripe API Key found in D:\MLH\dev-tools\attack-on-web\src\extensionChecker.js
2 const check = 'sk_live_4eC39HqLyjWDarjtT1zdp7dc'
```
![asciicast](https://github.com/felixfaisal/attack-on-web/blob/main/Peek%202021-02-26%2017-05.gif)
 
 
 ## Test using Github Actions
 
### Input

### `repo-name`
The name of the repository where you are calling this actions 

**Required** This input is required for the action to run

### Example usage

```
uses: felixfaisal/attack-on-web-actions@v2.0
with:
  repo-name: 'my-repo'
```

 
 
 ## Contributing

To contribute, please find the contribution guidelines here - [Contribution Guidelines](https://github.com/felixfaisal/attack-on-web/blob/main/CONTRIBUTING.md)


## License 
MIT 

