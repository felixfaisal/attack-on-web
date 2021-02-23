#!/usr/bin/env node
const fs = require('fs');
path = require('path');
const inquirer = require('inquirer');
const yargs = require('yargs');
const chalk = require('chalk');
//const extensionChecker = require('./src/extensionChecker');
//const fileReaderRegex = require('./src/fileReaderRegex')
const arr = require('./src/check.js')
// const ora = require('ora');
// const testCheck = require('./src/yargs.js')
// const spinner = ora('Loading Crawler \n').start();
const clear = require('clear')
const crawl = require('./src/crawl')
const Table = require('cli-table');
const reg = require('./data/apiKeyRegex')
const options = {
    fit: 'box',
    width: 60,
    height: 40,

}
const table = new Table({
    head: ['SUPPORTED API PROVIDERS'],
    colWidths: [30, 30, 30]
});

clear()

function listToMatrix(list, elementsPerSubArray) {
    let matrix = [],
        i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

function testCheck() {
    inquirer
        .prompt([{
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
            crawl(__dirname, answers);
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

if (argv.test == true) {
    testCheck()
}else if (argv.list) {
    let apiProviders = [];

    reg.providers.forEach(element => {
        apiProviders.push(element.provider)
    });

    let matrix = listToMatrix(apiProviders, 3);
    for (let index = 0; index < matrix.length; index++) {
        table.push(
            matrix[index]
        );
    }
    console.log(table.toString());
}else{
    
        console.log(chalk.green(`
        
     
                                                                    ]
                                                                    ▒
           ▄▄▄           ╓▄▄▄▄,       ▄▄▄   ╓▄▄   ╓▄▄          ─,   ▒[   ╓
          █▓█▓█        ▄▓▓▀▀▀█▓█▄     ▐▓▓▌ ╔▓▓▓▌ ,▓▓▌            ╢╖╖▒▒╖╢╜
         █▓█ █▓█       ▓▓▌    ▓▓▓      ▓▓▓▄▓█ █▓▄█▓▌     ,,╓╓╖╖╖╖@▒▒▒▒▒▒╖╖╖╖╖╓,,
        █▓█▀▀▀█▓█      ▀▓▓█▄▄█▓▓▀       █▓▓█  ╙▓▓▓█              ]▒▒▒▒▒╢
       "▀▀     ▀▀"       "▀▀▀▀"         '▀▀    "▀▀              ╖╜ ▒▒ ╙╢
                                                                    ▒[
                                                                    ║
                                                                    ]
                   
Hello, welcome to attack-on-web! AoW is a tool to test security vulnerabilities in your code.

${chalk.yellow('Tip:')} Type ${chalk.white('aow -h')} or ${chalk.white('aow --help')} to view list of commands
     Type ${chalk.white('aow -t')} or ${chalk.white('aow --test')} for testing.
     Type ${chalk.white('aow -l')} or ${chalk.white('aow --list')} for list of providers.`))

}

// crawl(__dirname);