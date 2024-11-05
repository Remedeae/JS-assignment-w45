const account = {
    accountName: "Jane Doe",
    balance: 9999,
    loginName: null,
    login: false,
    accountError () {
        console.log("Insufficient funds.");
        const errorMessage = prompt ("Would you still like to make a withdrawal? Y/N");
        switch (errorMessage) {
            case "Y":
            case "y":
                this.withdrawal();
                break;
            case "N":
            case "n":
        }
    },
    getBalance() {
        console.log(`You have ${this.balance}SEK on your account.`);
    },
    deposit() {
        this.balance += parseFloat(
            prompt("How much do you want to deposit?"));
        this.getBalance ();
    },
    withdrawal() {
        let withdraw = parseFloat(
            prompt(
            "How much do you want to withdraw?"));
        if (this.balance > withdraw) {
            this.balance -= withdraw;
            this.getBalance ();
            return this.balance;
        }
        else {
            this.accountError ();
        }
    },
    getAccountName () {
        console.log(this.accountName);
    },
    //In the beginning I started making the accountError as the loginPrompt, but realised that was 
    //probably not what this was meant to be. But I kept it since I thought it was neat :)
    loginPrompt () {
        this.loginName = prompt("Enter account name.");
        if (this.loginName !== this.accountName) {
            this.loginName = prompt("Unknown account name, please try again.");
        }
        else {
            console.log(`Welcome ${this.accountName}!`);
            return this.login = true;
            }
        },
    exitAccount() {
        this.login = false;
        console.log("You are logged out.");
    }
};

function atm () {
    while (account.login === true) {
    const message = parseFloat (
        prompt(
            "Select a choice. 1) See balance 2) Make a deposit 3) Make a withdrawal 4) Get account name 5) Exit"
        )
    );
    switch (message) {
        case 1:  
            account.getBalance ();
            break;
        case 2:
            account.deposit();
            account.getBalance();
            break;
        case 3:
            account.withdrawal ();
            break;
        case 4:
            account.getAccountName ();
            break;
        case 5:
            account.exitAccount ();
    
    };
}

};

account.loginPrompt();
atm ();
