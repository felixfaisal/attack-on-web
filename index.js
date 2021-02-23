const fs = require('fs');
path = require('path');
const inquirer = require('inquirer');
const yargs = require('yargs');
//const extensionChecker = require('./src/extensionChecker');
//const fileReaderRegex = require('./src/fileReaderRegex')
const arr = require('./src/check.js')
// const ora = require('ora');
// const testCheck = require('./src/yargs.js')
// const spinner = ora('Loading Crawler \n').start();
const clear = require('clear')
const crawl = require('./src/crawl')

clear()
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
                    '.py',
                    '.py3',
                    '.html',
                    '.txt',
                    '.yml',
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
            // answers.directories.length == 0 ? 
            answers.directories.push("gitignore");
            answers.directories.push('node_modules');
            console.log('directores', answers.directories.length);
            crawl(__dirname, answers, answers.directories.length);
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

// console.log(argv.list);

if (argv.test == true) {
    testCheck()
    //crawl(__dirname)
}

if(argv.list)
{
    console.log('list')
}

// crawl(__dirname);