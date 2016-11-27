var accounts = [
    
    {username : "Shila",
        balance : "250"
},
 {balance: "100",
      username: "Tim"
}];

function createAccount (acc){
    accounts.push(acc);
};

function assignEmail (username, email){
   getAccount(username).email=email;

};

function getAccount (u){
    var rtnAccount;
    accounts.forEach(function(acc){
        if(acc.username === u){
            rtnAccount = acc;
        }
       });
    return rtnAccount;
};

createAccount({username:"Jens",balance: 10});
assignEmail("Shila","r0257725@student.thomasmore.be");
getAccount("Jens").email = "jens@hotmail.com";
console.log(accounts);
