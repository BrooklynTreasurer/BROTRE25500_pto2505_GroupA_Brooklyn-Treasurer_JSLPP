import { addNewTask,editTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}

export function setupEditTaskModalHandler(taskId) {
  const overlay = document.querySelector(".modal-overlay");
  const form = document.querySelector(".modal-window");
  const saveChangesBtn = document.getElementById("save-changes-btn");

  // Clear previous event listeners to avoid duplicates
  saveChangesBtn.removeEventListener("click", handleSubmit);
  saveChangesBtn.addEventListener("click", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    if (form.checkValidity()) {
      editTask(taskId);
      overlay.close(); // Close the modal after editing
      alert("Task edited successfully!"); // Provide feedback
    } else {
      form.reportValidity();
    }
  }
}