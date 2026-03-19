const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
     let inputValue = inputBox.value.trim();
    if (inputBox.value === '') {
        alert("You must write a task");
        return;
    }
            const tasks = listContainer.getElementByTagName("li");
      for(let i =0;i<tasks.length;i++){
          let taskText = 
            if(tasks[i].firstChild.textContent.trim().toLowerCase();
                alert("Task already exists");
                return;
            }
        }

      
        const li = document.createElement("li");
        li.textContent = inputValue;
  const span = document.createElement("span");
        span.innerHTML = "\u00d7";
     li.appendChild(span);
        listContainer.appendChild(li);
            inputBox.value = "";
    saveData();
}
    


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask() {
    const data = localStorage.getItem("data");
    if(data){
        
    listContainer.innerHTML = localStorage.getItem("data");
}
}
showTask();
