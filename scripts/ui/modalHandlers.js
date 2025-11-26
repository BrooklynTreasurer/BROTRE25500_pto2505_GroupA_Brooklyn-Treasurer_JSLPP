import { addNewTask, editTask, deleteTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  if (!newTaskBtn || !overlay || !form) {
    console.error("New task modal elements not found");
    return;
  }

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      console.log("Form is valid, calling addNewTask");
      await addNewTask();
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

  if (!form || !saveChangesBtn) {
    console.error("Edit task form elements not found");
    return;
  }

  // Remove all previous event listeners to prevent duplicates
  const newButton = saveChangesBtn.cloneNode(true);
  saveChangesBtn.parentNode.replaceChild(newButton, saveChangesBtn);
  
  newButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Save changes clicked for task:", taskId);
    
    if (form.checkValidity()) {
      console.log("Form is valid, calling editTask");
      await editTask(taskId);
      modal.close();
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

  if (!deleteBtn || !confirmationModal || !confirmDeleteBtn || !cancelDeleteBtn) {
    console.error("Delete task elements not found");
    return;
  }

  // Remove all previous event listeners to prevent duplicates
  const newDeleteBtn = deleteBtn.cloneNode(true);
  deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);

  newDeleteBtn.addEventListener("click", () => {
    console.log("Delete button clicked for task:", taskId);
    confirmationModal.showModal();
  });

  // Remove previous listeners from confirmation buttons
  const newConfirmBtn = confirmDeleteBtn.cloneNode(true);
  confirmDeleteBtn.parentNode.replaceChild(newConfirmBtn, confirmDeleteBtn);

  const newCancelBtn = cancelDeleteBtn.cloneNode(true);
  cancelDeleteBtn.parentNode.replaceChild(newCancelBtn, cancelDeleteBtn);

  // Confirm delete
  newConfirmBtn.addEventListener("click", async () => {
    console.log("Confirming delete for task:", taskId);
    await deleteTask(taskId);
    confirmationModal.close();
    document.getElementById("task-modal").close();
  });

  // Cancel delete
  newCancelBtn.addEventListener("click", () => {
    console.log("Delete cancelled");
    confirmationModal.close();
  });
}

export function setupTopLeftImageModal() {
  const openBtn = document.getElementById("mobile-top-left-btn");
  const modal = document.getElementById("mobile-top-modal");
  const closeBtn = document.getElementById("mobile-top-modal-close");
  const addTaskBtn = document.getElementById("mobile-add-task-btn");
  const themeToggleBtn = document.getElementById("mobile-theme-toggle-btn");

  if (!openBtn || !modal) return;

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }

  // Optional quick action wiring (call existing functions)
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", () => {
      // open the add-new-task modal (reuse existing UI)
      const addOverlay = document.querySelector(".modal-overlay");
      if (addOverlay) {
        addOverlay.showModal ? addOverlay.showModal() : addOverlay.style.visibility = "visible";
      }
      modal.close();
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      // toggle theme via your existing checkbox or function
      const checkbox = document.getElementById("theme-toggle-checkbox");
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        // trigger change event so existing listener applies theme and saves preference
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
      modal.close();
    });
  }
}