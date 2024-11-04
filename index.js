const account = {
    accountName: "Jane Doe",
    balance: 9999,
    loginName: null,
    login: false,
    getBalance() {
        console.log(`You have ${this.balance}SEK on your account.`);
    },
    deposit() {
        this.balance += parseFloat(
            prompt("How much do you wanna deposit?"));
    },
    withdrawal() {
        this.balance -= parseFloat(
            prompt(
            "How much do you wanna withdraw?"));
    },
    getAccountName () {
        console.log(this.accountName);
    },
    accountError () {
        if (this.balance < 0) {
            this.balance = 0;
        }
/*         return this.balance; */
    },
    //In the beginning I started making the accountError as the loginPrompt, but realised that was 
    //probably not what this was meant to be. But I kept it since I thought it was neat :)
    loginPrompt () {
        while (this.loginName !== this.accountName) {
                this.loginName = prompt("Enter account name.");
                console.log("Unknown account name, please try again.")
            }
        console.log(`Welcome ${this.accountName}!`);
        return this.login = true;
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
            account.accountError ();
            account.getBalance ();
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