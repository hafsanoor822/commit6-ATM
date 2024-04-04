import inquirer from "inquirer";
// //type personType={name:string,userName:string,accountNumber:number,PIN:number}
var person1 = {
    name: "Hafsa Noor",
    userName: "hafsa822",
    accountNumber: 12345,
    PIN: 4444,
    balance: 45000
};
//console.log("Your account information",person1)
do {
    const option1 = await inquirer.prompt([{ name: "option1", type: "list", choices: ["Withdraw money", "Deposit money", "Check balance"], message: "Select one of the following option" }]);
    const pinNum = await inquirer.prompt([{ name: "pinNum", type: "number", message: "Enter your PIN to proceed" }]);
    if (pinNum.pinNum === person1.PIN) {
        if (option1.option1 === "Withdraw money") {
            const option2 = await inquirer.prompt([{ name: "option2", type: "list", choices: ["FAST CASH", "Simple withdrawal"], message: "Select one of the following option" }]);
            if (option2.option2 === "FAST CASH") {
                const option3 = await inquirer.prompt([{ name: "option3", type: "list", choices: ["500", "1000", "5000", "10000"], message: "Select one of the following option" }]);
                if (option3.option3 === "500") {
                    var remainingBalance = person1.balance - 500;
                    person1.balance = remainingBalance;
                    console.log("Withdrawal successful! Your remaining balance is now  = Rs", person1.balance);
                }
                else if (option3.option3 === "1000") {
                    var remainingBalance = person1.balance - 1000;
                    person1.balance = remainingBalance;
                    console.log("Withdrawal successful! Your remaining balance is now  = Rs", person1.balance);
                }
                else if (option3.option3 === "5000") {
                    var remainingBalance = person1.balance - 5000;
                    person1.balance = remainingBalance;
                    console.log("Withdrawal successful! Your remaining balance is now  = Rs", person1.balance);
                }
                else if (option3.option3 === "10000") {
                    var remainingBalance = person1.balance - 10000;
                    person1.balance = remainingBalance;
                    console.log("Withdrawal successful! Your remaining balance is now  = Rs", person1.balance);
                }
                else {
                    console.log("Please select one of the following option");
                }
            }
            else if (option2.option2 === "Simple withdrawal") {
                const option4 = await inquirer.prompt([{ name: "option4", type: "number", message: "Enter the amount you want to withdraw" }]);
                if (option4.option4 % 500 === 0) {
                    var remainingBalance = person1.balance - option4.option4;
                    person1.balance = remainingBalance;
                    console.log("Withdrawal successful! Your remaining balance is now  = Rs", person1.balance);
                }
                else {
                    console.log("The entered amount should be multiple of 10 ");
                }
            }
        }
        else if (option1.option1 === "Deposit money") {
            const option5 = await inquirer.prompt([{ name: "option5", type: "number", message: "Enter the amount you want to deposit" }]);
            var newBalance = person1.balance + option5.option5;
            person1.balance = newBalance;
            console.log("Deposit successful! Your new balance is = Rs", person1.balance);
        }
        else if (option1.option1 === "Check balance") {
            console.log("Your current balance is =", person1.balance);
        }
        else {
            console.log("Please select one of the following option");
        }
        const option6 = await inquirer.prompt([{ name: "option6", type: "list", choices: ["Yes", "No"], message: "Do you want a receipt?" }]);
        if (option6.option6 === "Yes") {
            console.log(person1);
        }
        else {
            console.log("Thank you for your transaction");
        }
    }
    else
        (console.log("Wrong PIN"));
    const option7 = await inquirer.prompt([{ name: "option7", type: "list", choices: ["Yes", "No"], message: "Do you want to repeat the transaction?" }]);
    var repeat = option7.option7 === "Yes";
} while (repeat);
