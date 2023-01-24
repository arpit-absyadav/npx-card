#!/usr/bin/env node


const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:arpit.absyadav@gmail.com"),
                        console.log("\nDone, see you soon at inbox.\n");
                    const tip = [
                        `Tip:  ${chalk.yellow.bold(
                            "If your default mail client is not opend. Please send mail on"
                        )}`,
                        '',
                    ].join("\n");
                    const mailto = [
                        ` ${chalk.yellow.bold(
                            "arpit.absyadav@gmail.com"
                        )}`,
                        '',
                    ].join("\n");
                    console.log(tip + mailto);
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Thank You.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Arpit Yadav [ arpit.absyadav@gmail.com ]"),
    handle: chalk.gray("@arpit-absyadav"),
    work: `${chalk.gray("Software Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("Sunstone")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("arpitabsyadav"),
    github: chalk.gray("https://github.com/") + chalk.green("arpit-absyadav"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arpitabsyadav"),
    web: chalk.cyan("https://arpit-absyadav.github.io"),
    stackoverflow: chalk.gray("https://stackoverflow.com/users/") + chalk.blue("2165443/arpit-yadav"),
    npx: chalk.red("npx") + " " + chalk.gray("arpityadav"),

    labelWork: chalk.gray.bold("         Work:"),
    labelTwitter: chalk.gray.bold("      Twitter:"),
    labelGitHub: chalk.gray.bold("       GitHub:"),
    labelLinkedIn: chalk.gray.bold("     LinkedIn:"),
    labelWeb: chalk.gray.bold("          Web:"),
    labelStackoverflow: chalk.gray.bold("Stackoverflow:"),
    labelCard: chalk.gray.bold("         Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelWeb}  ${data.web}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelStackoverflow}  ${data.stackoverflow}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
