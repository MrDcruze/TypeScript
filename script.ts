type customType = {money: number, deposite(val: number)};

let bankAccount: customType = {
    money: 2000,
    deposite(value: number) {
        this.money +=  value;
    }
};

let mySelf: {name: string, bankAccount: customType, hobbies: string[] } = {
    name: "Brendan Dcruze",
    bankAccount: bankAccount,
    hobbies: ["Dancing", "Cricket"]
};

mySelf.bankAccount.deposite(3000);

console.log(mySelf);