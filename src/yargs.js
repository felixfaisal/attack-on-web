const yargs = require('yargs');
//const argv = yargs.argv;
const inquirer = require('inquirer');
const clear = require('clear');
const chalk = require('chalk');

clear();

function testCheck() {
    inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'extensions',
            choices: [
                '.js',
                '.ts',
                '.json',
            ],
            default: 'none'
        },
        {
            type: 'checkbox',
            name: 'directories',
            choices: [
                'node_modules',
                '/node_modules'
            ],
            // default: 'gitignore'
        },
        {
            type: 'checkbox',
            name: 'files',
            choices: [
                'env.json',
            ],
            default: 'none'
        },
    ])
    .then(answers => {
        answers.directories.length==0?answers.directories.push("gitignore"):null;
        console.log(answers);
    })
}

const argv = yargs
  .command('aow', 'attack-on-web', {
      list: {
          describe: "Lists all providers",
          alias: 'l'
      },
      test: {
          describe: "Run the script to check for API access tokens",
          alias: 't'
          
      }
  })
  .help()
  .alias("help", "h")
  .argv

console.log(argv);

if(argv.test == true) {
    testCheck()
}