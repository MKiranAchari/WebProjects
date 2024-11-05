const inp=document.getElementById("input-box");
const list_container=document.getElementById("list-item");

function addtask(){
    if(inp.value==''){
        alert("must have a text!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inp.value;
        list_container.appendChild(li);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        li.appendChild(sp);
    }
    inp.value='';
    saveData();
}
list_container.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}
function showList(){
    list_container.innerHTML=localStorage.getItem("data");
}
showList();