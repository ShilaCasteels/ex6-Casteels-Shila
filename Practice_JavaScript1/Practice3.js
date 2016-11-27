var accounts = [
    
    {username : "Shila", balance: Number(250)
},
    {username: "Tim", balance: Number(100)
}];

function createAccount (acc){
    accounts.push(acc);
};

function assignEmail (username, email){
   getAccount(username).email=email;

};

function getAccount (username){
    var rtnAccount;
    
     for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			rtnAccount = accounts[i];
                        console.log(rtnAccount);
			break;
                }
        }
        
        return rtnAccount;
   };
   

function addValidation (username, validation){
    getAccount(username).validation = validation;
       };
       
function deposit (username, amount) {
    if(amount>0 && !isNaN(parseInt(amount))){
    username.balance += amount;
    console.log("New balance = " + amount);}
    else {"Error, please insert a number!";}
};


function withdrawl (username, amount){
  username.balance -= amount;
    if(amount>0 && !isNaN(parseInt(amount))){
    username.balance -= amount;
    console.log("New balance = " + amount);}
    else {"Error, please insert a number!";}
};

function getBalance(user){
    user = getAccount(user);
    return function(){
        var rtnBalance;
        getAccount(user).balance = rtnBalance;
    console.log("New balance= " + rtnBalance);
    return rtnBalance;
    };
 };

addValidation("Shila","Ok");
deposit("Shila",230);
withdrawl("Shila",55);
getAccount("Shila");
getBalance("Shila");