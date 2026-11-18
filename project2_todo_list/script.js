// Every task is stored as an object { text, done } inside this array
const tasks = [];

const input  = document.getElementById("taskInput");
const list   = document.getElementById("taskList");
const status = document.getElementById("status");

function addTask() {
  const text = input.value.trim();
  if (text === "") return;          // ignore empty input
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
}

function render() {
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "text" + (task.done ? " done" : "");
    span.textContent = task.text;
    span.addEventListener("click", function () {
      task.done = !task.done;       // toggle completed
      render();
    });

    const delBtn = document.createElement("button");
    delBtn.className = "del";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      tasks.splice(index, 1);       // remove from array
      render();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  if (tasks.length === 0) {
    status.textContent = "No tasks yet. Add one above!";
  } else {
    const remaining = tasks.filter(function (t) { return !t.done; }).length;
    status.textContent = remaining + " of " + tasks.length + " tasks remaining";
  }
}

document.getElementById("addBtn").addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

render();
