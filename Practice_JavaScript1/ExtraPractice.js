
var accounts = [
    {id: 1,
     username: "Shila",
     balance: Number(230),
     numTransactions: 0},
    {id: 2,
     username: "Tim",
     balance: Number(100),
     numTransactions: 0}];

accounts.createAccount= function(acc){
    this.push(acc);
};

accounts.assignEmail= function(email){
   this.email= email;

};

accounts.getAccount= function(name){
    var rtnAccount;
    this.forEach(function(acc){
        if(acc.username === name){
            rtnAccount = acc;
        }
       });
    return rtnAccount;
   };
   

accounts.addValidation= function(validation){
    this.validation = validation;
       };
       
accounts.deposit=function(amount) {
        this.balance = this.balance + amount;
    console.log("New balance = " + this.balance);
    this.numTransactions++;
};

accounts.withdrawl= function(amount){
   this.balance = this.balance - amount;
   console.log("New balance = " + this.balance);
   this.numTransactions++;
};

accounts.getnumTransactions= function(name){
    var rtnnumTrans;
    this.forEach(function(rtn){
        if(rtn.username === name){
            rtnnumTrans = rtn;
        }
       });
    console.log("Number of Transactions= "+rtnnumTrans);
    return rtnnumTrans;
   };
   
accounts.addValidation("Ok");
accounts.deposit(230);
accounts.withdrawl(55);
accounts.assignEmail("shilacasteels@hotmail.com");
accounts.getAccount("Shila");
accounts.getAccount("Tim");
accounts.getnumTransactions("Shila");