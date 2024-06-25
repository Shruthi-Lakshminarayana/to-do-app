const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (task.value === "") {
    console.log("hello");
    alert("Please add a task first!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = task.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  task.value = "";
  saveTask();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.tagName);
    console.log(e.target);
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    console.log(e.target.tagName);
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();
