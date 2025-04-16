var arr=[];
function submit()
{
    var selected=document.getElementById("choose").value;
    document.getElementById("displayPage").style.display="none";
    switch(selected){
        case "add":
            document.getElementById("addPage").style.display="block";
            break;
        case "delLast":
          arr.pop();
          document.getElementById("show").innerHTML=arr;
          break;
        case "arrayOverwrite":
            document.getElementById("overwritePage").style.display="block";
            
            break;
        case "searchElement":
            document.getElementById("searchelementPage").style.display="block";
            
            break;
        case "reverseArray":
            arr.reverse();
            document.getElementById("show").innerHTML=arr;
            break;
        case "delFirst":
                arr.shift();
                document.getElementById("show").innerHTML=arr;
                break;
        case "arrange":
                    arr.sort();
                    document.getElementById("show").innerHTML=arr;
                    break;
         case "modify":
            document.getElementById("modifyPage").style.display="block";
            
            break;
    }
}
function Add()
{
    var store=document.getElementById("getVal").value;
    arr.push(store);
    document.getElementById("show").innerHTML=arr;
    document.getElementById("addPage").style.display="none";
}
function overwrite()
{
    var value=document.getElementById("getValue").value;
    var start=document.getElementById("getStart").value;
    var end=document.getElementById("getEnd").value;
    arr.fill(value,start,end);
    document.getElementById("show").innerHTML=arr;
    document.getElementById("overwritePage").style.display="none";
}
function search()
{
    var value=document.getElementById("getValu").value;
    document.getElementById("show1").style.display="none";
    document.getElementById("show2").style.display="none"; 
    if(arr.includes(value))
    {
         
        document.getElementById("searchelementPage").style.display="none";
        document.getElementById("displayPage").style.display="block";
        document.getElementById("show1").style.display="block";
    }
    else{
        document.getElementById("show2").style.display="block"; 
        document.getElementById("displayPage").style.display="block";
        document.getElementById("searchelementPage").style.display="none";
    }
}
function modify()
{
    var num=document.getElementById("getNum").value;
    var Str=document.getElementById("getStr").value;
   var change= arr.with(num, Str);
   arr=change;
   document.getElementById("show").innerHTML=arr;
   document.getElementById("modifyPage").style.display="none";
}