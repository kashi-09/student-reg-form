



import inquirer from 'inquirer';
import { questions } from './questions.js';


type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: number;
};

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
};





  let answers = await inquirer.prompt(questions);
  let student: Student = {
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

