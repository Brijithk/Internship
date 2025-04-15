var storedUserData = localStorage.getItem('user');
var storedUserPass = localStorage.getItem('pass');
var username=JSON.parse(storedUserData);
var userpass=JSON.parse(storedUserPass);



 function loginAcc()
 {
 storedUserData = localStorage.getItem('user');
storedUserPass = localStorage.getItem('pass');
var username=JSON.parse(storedUserData);
var userpass=JSON.parse(storedUserPass);
 
  var EnteredName=document.getElementById("user_name").value;
  var EnteredPass=document.getElementById("pass_word").value;
  if(username==EnteredName)
  {
    if(userpass==EnteredPass)
    {
      document.getElementById("homePage").style.display="block";
        document.getElementById("createPage").style.display="none";
        document.getElementById("loginPage").style.display="none";
    }
    else{
      document.getElementById("user_not_found").style.display="block";
    }
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

    var enteredName=document.getElementById("user_Name").value;
    var enteredPassword=document.getElementById("pass_Word").value;
    var reenteredPassword=document.getElementById("re_password").value;
    if(enteredPassword==reenteredPassword)
    {
      localStorage.setItem('user', JSON.stringify(enteredName));
      localStorage.setItem('pass', JSON.stringify(enteredPassword));
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
  storedUserData = localStorage.getItem('user');
  storedUserPass = localStorage.getItem('pass');
    document.getElementById("loginPage").style.display="block";
    document.getElementById("createPage").style.display="none";
    document.getElementById("homePage").style.display="none"; 
 }