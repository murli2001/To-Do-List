const userInput = document.querySelector(".items");

// const input_items = document.querySelector(".tasks

const input_tasks = document.querySelector(".tasks");

const containerApp = document.querySelector(".container");
const containerTasks = document.querySelector(".task_row");
const containerMovements = document.querySelector(".movements");

const btnSubmit = document.querySelector(".submit");
const btnDelete = document.querySelector("delete_box");

// console.log(containerTasks.innerHTML);
// console.log(input_items.textContent);
// console.log(input_tasks.textContent);
const displayTasks = function (input_items) {
  containerMovements.innerHTML += `
    <div class="task_row">
    <div class="tasks">${input_items}
   
    <button class="delete_box">Delete</button></div>
    </div>
    `;
};
// <button class="edit_box">Edit</button>
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (userInput.value.length !== 0) {
    const task = userInput.value;
    console.log(task);
    displayTasks(task);
  } else {
    window.alert("Enter the task");
  }
});

// btnDelete.addEventListener("click", function () {
//   this.remove();
// });
