var account = {};

account.balance = 0;
account.deposit = function(amount){
      if(amount>0 && !isNaN(parseInt(amount))){
    this.balance += amount;
    console.log("New balance = " + amount);}
    else {"Error, please insert a number!";}
};

account.withdrawl = function(amount){
        if(amount>0 && !isNaN(parseInt(amount))){
    this.balance -= amount;
    console.log("New balance = " + amount);}
    else {"Error, please insert a number!";}
};

account.getBalance = function(user){
     user = this.getAccount(user);
    return function(){
        var rtnBalance;
        user.balance = rtnBalance;
    console.log("New balance= " + rtnBalance);
    return rtnBalance;
    };
 };

account.assignEmail= function(email){
   this.email=email;

};

account.getAccount= function(username){
    var rtnAccount;
    
     for (var i = 0; i < this.length; i++) {
		if (this[i].username === username) {
			rtnAccount = this[i];
			break;
                }
        }
        console.log(rtnAccount);
        return rtnAccount;
   };
   

account.addValidation= function(validation){
    this.validation = validation;
       };

account.deposit(200);
account.withdrawl(100);
account.getBalance();
account.addValidation("Ok");
account.assignEmail("ShilaCasteels@hotmail.com");
account.getAccount("Shila");