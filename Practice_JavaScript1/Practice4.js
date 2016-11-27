var account = {};

account.balance = 0;
account.deposit = function(amount){
    this.balance = this.balance + amount;
    console.log("New balance after deposit= "+ this.balance);
};
account.withdrawl = function(amount){
    this.balance = this.balance - amount;
    console.log("New balance after withdrawl= " + this.balance);
};
account.getBalance = function(){
    console.log("New balance= " + this.balance);
    return this.balance;
};


account.deposit(200);
account.withdrawl(100);
account.getBalance();