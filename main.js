"use strict";

// // x = 16;

// // console.log(x) // * will return undefined bc it does not have let, var, or const

// // const ageCheck = (age) => {
// //   if (age < 21) {
// //   console.log("No drinks for you")
// // } else {
// //   console.log("PARTAY!!")
// // }
// // }

// // ageCheck(12);
// // ageCheck(21);


// // const lengthOutput = (string) => {
// //   return string.length
// // }

// // console.log(lengthOutput("Liz"));

// // const quoteFinder = (testString) => {
// //   return "Winter is coming".indexOf(testString)
// // }

// // console.log(quoteFinder('is'));

// const employee = {
//   firstName: 'Liz',
//   lastName: 'B',
//   role: 'student',
//   accountNumber: '0-223232323',
//   isManager: false,
//   titles: ['Helper', 'LB'],
//   accolade: {
//     title: 'Employee of the Year',
//     dateEarned: '03/06/2020',
//     expires: '10/04/2020',
//     isCool: true
//   }
// }

// console.log(employee.firstName);
// const keyToCheck = 'accolade';

// console.log(employee[keyToCheck])
// console.log(employee[keyToCheck]['isCool'])
// console.log(employee[keyToCheck].isCool)
// console.log(employee.accolade.isCool)

// // Create a function that takes in an employee
// // If first name starts with L add a key=status and value='vip
// // if the employee firstname does not atart with an l then add key=status and value=peasant

// const employeeStatus = (employeeName) => {
//   if (employeeName.firstName.startsWith("L")) {
//     employeeName.status = "VIP";
//   } else {
//     employeeName.status = "peasant";
//   }
// }

// // const employeeStatus = (employeeName) => {
// //   if (employeeName.firstName[0] === "L") {
// //     employeeName.status = 'VIP'
// //   } else {
// //     employeeName.status = 'peasant'
// //   }
// // }

// employeeName(employee)
// console.log(employeeStatus('Liz'));

console.log("HELP")

const colors = ['purple', 'yellow', 'blue', 'orange']

const colorLoop = () => {
    let domString = '';

    for (let i = 0; i < colors.length; i++) {
      domString += `<h1>${colors[i]}</h1>`
    }
    console.log(domString);
}

colorLoop()
