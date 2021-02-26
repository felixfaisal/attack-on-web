
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

   [![asciicast](https://asciinema.org/a/j1mkJjCAAlDLFo51nBihTo29J.svg)](https://asciinema.org/a/j1mkJjCAAlDLFo51nBihTo29J?t=30)
 
 
 ## Test using Github Actions
 
 
 ## Contributing

To contribute, please find the contribution guidelines here - [Contribution Guidelines](https://github.com/felixfaisal/attack-on-web/blob/main/CONTRIBUTING.md)




