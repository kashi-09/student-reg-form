import inquirer from 'inquirer';
import { questions } from './questions.js';
let answers = await inquirer.prompt(questions);
let student = {
    firstName: answers.firstName,
    lastName: answers.lastName,
    age: answers.age,
    address: {
        street: answers.street,
        city: answers.city,
        state: answers.state,
        postalCode: answers.postalCode,
    },
};
console.log(answers);
console.log(student);
