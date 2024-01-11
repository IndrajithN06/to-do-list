const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addFunction() {
    if (inputBox.value === '') {
        alert("Type first");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "X"; // Set content for the span
        li.appendChild(span);

        listcontainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (event) {
    // Get the clicked element
    const clickedElement = event.target;

    // Check if the clicked element is a list item (LI)
    if (clickedElement.tagName === "LI") {
        // Toggle the "checked" class on the list item
        clickedElement.classList.toggle("checked");
        saveData();
    } else if (clickedElement.tagName === "SPAN") {
        // If the clicked element is a span, remove its parent (the LI)
        clickedElement.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("updatedData",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("updatedData");
}
showTask();


