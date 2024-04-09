document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach(todo => addTodoItem(todo.text, todo.completed));
    form.addEventListener("submit", function(event) {
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
            <input type="checkbox" ${completed ? 'checked' : ''}>
            <label>${text}</label>
            <div class="buttons-todo">
                <button class="edit-btn"><i class="fi fi-rr-file-edit"></i></button>
                <button class="delete-btn"><i class="fi fi-rr-trash-xmark"></i></button>
            </div>
        `;
        list.appendChild(listItem);

        const checkbox = listItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
            saveTodos();
        });

        const editBtn = listItem.querySelector(".edit-btn");
        editBtn.addEventListener("click", function() {
            const label = listItem.querySelector("label");
            label.contentEditable = true;
            label.focus();
        });

        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            listItem.remove();
            saveTodos();
        });

        listItem.addEventListener("blur", function() {
            const label = listItem.querySelector("label");
            label.contentEditable = false;
            if (label.textContent.trim() === "") {
                listItem.remove();
            }
            saveTodos();
        });

        // Adiciona ouvinte de evento para a tecla "Enter" no elemento label
        listItem.querySelector("label").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const label = listItem.querySelector("label");
                label.contentEditable = false;
            }
        });
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll(".todo-item").forEach(todoItem => {
            const text = todoItem.querySelector("label").textContent;
            const completed = todoItem.querySelector("input[type='checkbox']").checked;
            todos.push({ text, completed });
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});
