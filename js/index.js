const submitTodo = () => {
  const input = document.getElementById("input_todo");

  if (input.value === "") return;

  // Create a new li element
  const li = document.createElement("li");
  li.className = "list-group-item flex justify-between items-center";

  // Create a new p element and set its text content
  const p = document.createElement("p");
  p.textContent = input.value;

  // Create a new button element and set its attributes and text content
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-danger";
  button.textContent = "Delete";

  // Add event listener for the delete button
  button.addEventListener("click", function () {
    li.remove();
  });

  // Append the p and button to the li
  li.appendChild(p);
  li.appendChild(button);

  // Append the li to the ul
  const ul = document.getElementById("ul_todo");
  ul.appendChild(li);
  input.value = "";
};

// window.onload = loadTodos;
