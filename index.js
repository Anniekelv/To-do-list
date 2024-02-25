const inputSpace = document.getElementById("input-space")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputSpace.value ===''){
        alert("Please add something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHtml = inputSpace.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputSpace.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList. toggle = ("line-through");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHtml);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
