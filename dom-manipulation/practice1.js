document.addEventListener("DOMContentLoaded", (event) => {

    const taskInput = document.getElementById("input-text");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("list-container");

    function addItem() {
        const inputText = taskInput.value.trim();
    
        if (inputText !== "") {
            const li = document.createElement("li");
            li.textContent = inputText;

            taskList.appendChild(li);
       
        } else {
            alert("Please provide an input");
        return;
        }
            
        taskInput.value = ""; 
   
}

addButton.addEventListener("click", addItem);

});