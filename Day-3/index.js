// let students = new Map();
let students=[];
function send()
{
    document.getElementById("addedUserPage").style.display="none";
    document.getElementById("container").style.display="none";
    var Name=document.getElementById("name").value;
    var Role=document.getElementById("role").value;
    var Skill=document.getElementById("skill").value;
   var Url=document.getElementById("url").value;
//    students.set(Name, { name: Name, role:Role, skill:Skill,url:Url });
students.push( {name: Name, role: Role, skill: Skill, url: Url });
   console.log(students);
}
function addedUser()
{
    document.getElementById("container").innerHTML = "";

    document.getElementById("addedUserPage").style.display="block";
    document.getElementById("container").style.display="block";
document.getElementById("addNewPage").style.display="none";
for (let key in students) 
{
    let obj = students[key];
    passData(obj.name, obj.role, obj.skill, obj.url);
}
}
function passData(NAME,ROLE,SKILL,URL)
{
 
        const container = document.getElementById("container");
    
        // Create a NEW div each time
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <img src="${URL}" alt="${NAME}" style="border-radius:75px;margin-left:120px" width="100" />
        <h3>Name: ${NAME}</h3>
        <h4>Role: ${ROLE}</h4>
        <h4>Skill: ${SKILL}</h4>
        
    `;
        newDiv.style.border = "1px solid black";
        newDiv.style.margin = "10px";
        newDiv.style.padding = "10px";
        newDiv.style.background = "white";
        newDiv.style.height = "250px";
        newDiv.style.width = "350px";
        newDiv.style.borderRadius = "25px";
    
        container.appendChild(newDiv); // Adds it after the previous one
   
    
}
function addNewPage()
{
    document.getElementById("addNewPage").style.display="block";
    document.getElementById("addedUserPage").style.display="none";  
    
    
    document.getElementById("container").style.display="none";
}