import { addNewTask, editTask, deleteTask} from "../tasks/taskManager.js";

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
  
  // Set up the edit handler after opening the modal
  setupEditTaskModalHandler(task.id);
  
  // Set up the delete handler after opening the modal
  setupDeleteTaskHandler(task.id);
}

export function setupEditTaskModalHandler(taskId) {
  const modal = document.getElementById("task-modal");
  const form = document.getElementById("task-form");
  const saveChangesBtn = document.getElementById("save-changes-btn");

  // Remove all previous event listeners to prevent duplicates
  const newButton = saveChangesBtn.cloneNode(true);
  saveChangesBtn.parentNode.replaceChild(newButton, saveChangesBtn);
  
  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (form.checkValidity()) {
      editTask(taskId);
      modal.close();
      alert("Task edited successfully!");
    } else {
      form.reportValidity();
    }
  });
}

export function setupDeleteTaskHandler(taskId) {
  const deleteBtn = document.getElementById("delete-task-btn");
  const confirmationModal = document.getElementById("delete-confirmation-modal");
  const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
  const cancelDeleteBtn = document.getElementById("cancel-delete-btn");

  // Remove all previous event listeners to prevent duplicates
  const newDeleteBtn = deleteBtn.cloneNode(true);
  deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);

  newDeleteBtn.addEventListener("click", () => {
    confirmationModal.showModal();
  });

  // Remove previous listeners from confirmation buttons
  const newConfirmBtn = confirmDeleteBtn.cloneNode(true);
  confirmDeleteBtn.parentNode.replaceChild(newConfirmBtn, confirmDeleteBtn);

  const newCancelBtn = cancelDeleteBtn.cloneNode(true);
  cancelDeleteBtn.parentNode.replaceChild(newCancelBtn, cancelDeleteBtn);

  // Confirm delete
  newConfirmBtn.addEventListener("click", () => {
    deleteTask(taskId);
    confirmationModal.close();
    document.getElementById("task-modal").close();
    alert("Task deleted successfully!");
  });

  // Cancel delete
  newCancelBtn.addEventListener("click", () => {
    confirmationModal.close();
  });
}