const noteContainer = document.querySelector(".note-container");
const create = document.querySelector(".btn");
let note = document.querySelector(".input-field");
const cnt = document.querySelector(".container");

shownotes();

create.addEventListener("click", ()=>{
    let textBox = document.createElement('p');
    let img = document.createElement('img');
    textBox.className = "input-field";
    textBox.setAttribute("contenteditable", "true");
    img.src = "/notepad/images/delete.png";
    noteContainer.appendChild(textBox).appendChild(img);
})

noteContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        storedata();
    }
    else if(e.target.tagName === "P"){
        note = document.querySelectorAll(".input-field");
        note.forEach(txt => {
            txt.onkeyup = function(){
                storedata();
            }
        })
    }
})

cnt.addEventListener("click", (e)=>{
    if(e.target.className === "clr"){
        // console.log(e);
        alert("All Data will be cleared when after clicking 'OK'");
        localStorage.clear();
        shownotes();
    }
})


function storedata(){
    localStorage.setItem("note", noteContainer.innerHTML);
}

function shownotes(){
    noteContainer.innerHTML = localStorage.getItem("note");
}
