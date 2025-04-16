
var Users = JSON.parse(localStorage.getItem("users")) || [];//


 function loginAcc()
 {
  var Users = JSON.parse(localStorage.getItem("users")) || [];//

 var EnteredName=document.getElementById("user_name").value;
  var EnteredPass=document.getElementById("pass_word").value;
  let user = Users.find(user => user.name === EnteredName);
  if(user.password==EnteredPass)
  {
    document.getElementById("homePage").style.display="block";
            document.getElementById("createPage").style.display="none";
            document.getElementById("loginPage").style.display="none";
  }
  else{
    document.getElementById("user_not_found").style.display="block";
    
  }

 }



 function loginLink()
 {
    document.getElementById("loginPage").style.display="block";
        document.getElementById("createPage").style.display="none";
        document.getElementById("homePage").style.display="none";
        document.getElementById("user_name").value="";
        document.getElementById("pass_word").value="";
 }
 function createLink()
 {

   
    document.getElementById("loginPage").style.display="none";
        document.getElementById("createPage").style.display="block";
        document.getElementById("homePage").style.display="none"; 
 }



 function createAcc()
 {
  var Users = JSON.parse(localStorage.getItem("users")) || [];//

    var enteredName=document.getElementById("user_Name").value;
    var enteredPassword=document.getElementById("pass_Word").value;
    var reenteredPassword=document.getElementById("re_password").value;
    
 
    if(enteredPassword==reenteredPassword)
    {
      Users.push({ name: enteredName, password: enteredPassword });
     
      localStorage.setItem("users", JSON.stringify(Users));//
   
      document.getElementById("loginPage").style.display="block";
          document.getElementById("createPage").style.display="none";
          document.getElementById("homePage").style.display="none";
    }
    else{
      document.getElementById("pasword_mismatch").style.display="block";
      
    }
 }
 function loginLink()
 {
 
    document.getElementById("loginPage").style.display="block";
    document.getElementById("createPage").style.display="none";
    document.getElementById("homePage").style.display="none"; 
 }