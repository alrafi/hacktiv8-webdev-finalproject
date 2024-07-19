const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addTodoElement(todo));
};

// Function to add a new todo element to the DOM
const addTodoElement = (todoText) => {
  const ul = document.getElementById("ul_todo");

  // Create a new li element
  const li = document.createElement("li");
  li.className = "list-group-item flex justify-between items-center";

  // Create a new p element and set its text content
  const p = document.createElement("p");
  p.textContent = todoText;

  // Create a new button element and set its attributes and text content
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-danger";
  button.textContent = "Delete";

  // Add event listener for the delete button
  button.addEventListener("click", function () {
    li.remove();
    deleteTodoFromStorage(todoText);
  });

  // Append the p and button to the li
  li.appendChild(p);
  li.appendChild(button);

  // Append the li to the ul
  ul.appendChild(li);
};

// Function to save todos to localStorage
function saveTodoToStorage(todoText) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to delete a todo from localStorage
function deleteTodoFromStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

const submitTodo = () => {
  const inputElement = document.getElementById("input_todo");
  const todoText = inputElement.value;

  if (todoText.trim() === "") {
    alert("Please enter a todo item.");
    return;
  }

  addTodoElement(todoText);
  saveTodoToStorage(todoText);

  // Clear the input field
  inputElement.value = "";
};

// Load todos when the page loads
window.onload = loadTodos;

document.getElementById("btn_order").addEventListener("click", function () {
  var exampleModal = new bootstrap.Modal(
    document.getElementById("exampleModal")
  );
  exampleModal.show();
});

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
