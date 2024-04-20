#! /usr/bin/env node
import inquirer from "inquirer"
import ora from 'ora';
import chalk from 'chalk';

console.log(chalk.bold.cyanBright(`\n\t------------------------
                Welcome to the Word Counter app 
                            ---------------------------\n`));
const answers : {
    Sentence : string
} = await inquirer.prompt({
    name : "Sentence",
    type : "input",
    message :"Enter the Sentence to count the words and characters: ",
});
    const spinner = ora('🔄 Processing...').start();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const words = answers.Sentence.split(' ').filter(word => word.trim() !== '');
    const character = words.join(''); 
    spinner.stop();
    console.log(words);
    
    console.log(`\nTotal words: ${chalk.bold(words.length)}`);
    console.log(`Total characters: ${chalk.bold(character.length)}`);
    console.log(chalk.green('\nCounting complete!'));