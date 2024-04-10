document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
  
    todos.forEach((todo) => addTodoItem(todo.text, todo.completed));
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const todoText = input.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        input.value = "";
        saveTodos();
      }
    });
  
    function addTodoItem(text, completed = false) {
      const listItem = document.createElement("li");
      listItem.classList.add("todo-item");
      listItem.innerHTML = `
        <div class="input-group">
            <input type="checkbox" ${completed ? "checked" : ""}>
            <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
            </svg>
            <label>${text}</label>
        </div>
        <div class="buttons-todo">
          <button class="edit-btn"><i class="fi fi-rr-file-edit"></i></button>
          <button class="delete-btn"><i class="fi fi-rr-trash-xmark"></i></button>
        </div>
      `;
      list.appendChild(listItem);
  
      const checkbox = listItem.querySelector("input[type='checkbox']");
      const label = listItem.querySelector("label");
  
      // Adiciona o evento de clique à label
      label.addEventListener("click", function () {
        checkbox.checked = !checkbox.checked; // Alterna o estado do checkbox
        if (checkbox.checked) {
          listItem.classList.add("completed");
        } else {
          listItem.classList.remove("completed");
        }
        saveTodos();
      });
  
      const editBtn = listItem.querySelector(".edit-btn");
      editBtn.addEventListener("click", function () {
        label.contentEditable = true;
        label.focus();
      });
  
      const deleteBtn = listItem.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        listItem.remove();
        saveTodos();
      });
  
      listItem.addEventListener("blur", function () {
        label.contentEditable = false;
        if (label.textContent.trim() === "") {
          listItem.remove();
        }
        saveTodos();
      });
  
      listItem.querySelector("label").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          label.contentEditable = false;
        }
      });
    }
  
    function saveTodos() {
      const todos = [];
      document.querySelectorAll(".todo-item").forEach((todoItem) => {
        const text = todoItem.querySelector("label").textContent;
        const completed = todoItem.querySelector("input[type='checkbox']").checked;
        todos.push({ text, completed });
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
  