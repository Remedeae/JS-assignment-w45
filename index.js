/* import { Readline } from 'readline/promises';
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const prompt = await new Promise(resolve => {
    readline.question(message, resolve)
  }) */
const account = {
    accountName: "Jane Doe",
    balance: 9999,
    loginName: null,
    login: false,

    printBalance() {
        console.log(`You have ${this.balance}SEK on your account.`);
    },
    deposit() {
        let deposit = parseFloat(
            prompt(
                "How much do you want to deposit?"));
        if (isNaN(deposit)) {
            console.log("Invalid input.");
            return;
        }
        this.balance += deposit;
        this.printBalance();
        return this.balance;
    },
    withdrawal() {
        let withdraw = parseFloat(
            prompt(
                "How much do you want to withdraw?"));
        if (isNaN(withdraw)) {
            console.log("Invalid input.");
            return;
        }
        if (this.balance > withdraw) {
            this.balance -= withdraw;
            this.printBalance();
            return this.balance;
        }

        this.handleInputError("Insufficient funds. Would you still like to make a withdrawal? Y/N");

    },
    handleInputError(error) {

        let errorMessage = prompt(error);
        errorMessage = errorMessage.toLocaleUpperCase();

        if (errorMessage === "Y" || errorMessage === "YES") {
            this.withdrawal();
            return;
        }
        if (errorMessage === "NO" || errorMessage === "N") {
            atm();
            return;
        }
        this.handleInputError("Invalid input. Would you still like to make a withdrawal? Y/N");
    },
    printAccountName() {
        console.log(this.accountName);
    },
    //In the beginning I started making the accountError as the loginPrompt, but realised that was 
    //probably not what this was meant to be. But I kept it since I thought it was neat :)
    loginPrompt() {
        this.loginName = prompt("Enter account name.");
        if (this.loginName !== this.accountName) {
            this.loginName = prompt("Unknown account name, please try again.");
            return;
        }
        this.login = true;
        console.log(`Welcome ${this.accountName}!`);
    },
    exitAccount() {
        this.login = false;
        console.log("You are logged out.");
    }
};

function atm() {
    while (account.login === true) {
        const message = parseFloat(
            prompt(
                "Select a choice. 1) See balance 2) Make a deposit 3) Make a withdrawal 4) Get account name 5) Exit"
            )
        );
        switch (message) {
            case 1:
                account.printBalance();
                break;
            case 2:
                account.deposit();
                break;
            case 3:
                account.withdrawal();
                break;
            case 4:
                account.printAccountName();
                break;
            case 5:
                account.exitAccount();

        };
    }

};

account.loginPrompt();
atm ();

//account.withdrawal();
