function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(taskSpan);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => li.remove();

  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function editTask(taskSpan) {
  const currentText = taskSpan.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";

  taskSpan.replaceWith(input);
  input.focus();

  const saveEdit = () => {
    const newText = input.value.trim() || currentText;
    taskSpan.textContent = newText;
    input.replaceWith(taskSpan);
  };

  input.addEventListener("blur", saveEdit);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      input.blur();
    }
  });
}
