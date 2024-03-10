const taskInput = document.getElementById("task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-items");
const clearAll = document.querySelector(".clear-tasks");
const searchInput = document.querySelector("#search");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskInput.value !== "") {
    const newLi = document.createElement("li");
    newLi.className = "task";
    newLi.style.margin = ".5rem 0rem";
    const task = document.createElement("input");
    task.disabled = true;
    task.type = "text";
    task.className = "taskDisabled";
    task.value = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    newLi.appendChild(task);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);
    taskList.appendChild(newLi);

    taskInput.value = "";
  } else {
    const err = document.querySelector(".err");
    err.style.display = "block";
    setTimeout(() => {
      err.style.display = "none";
    }, 2000);
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
// edit
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    console.log(e.target.parentElement);
    const input = e.target.parentElement.querySelector('input[type="text"]');
    input.disabled = !input.disabled;
    if (!input.disabled) {
      input.focus();
    }
  }
});

clearAll.addEventListener("click", function (e) {
  e.preventDefault();
  taskList.innerHTML = "";
});
searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchedWord = e.target.value.toLowerCase();

  const taskItems = document.querySelectorAll(".task");
  taskItems.forEach((taskItem) => {
    let taskText = taskItem.querySelector(".taskDisabled").value.toLowerCase();

    if (taskText.indexOf(searchedWord) !== -1) {
      taskItem.style.display = "block";
    } else {
      taskItem.style.display = "none";
    }
  });
});