# JSL Portfolio Piece: Kanban App Deployment & Features Implementation

## 👨‍💻 Author  
**Developed by Brooklyn Treasurer**

---

## 📝 Project Overview  
The **JSL Portfolio Kanban App** is a fully functional task management application that builds upon previous work from JSL04/JSL05. This project involves:

- Deploying the Kanban app to **Netlify**  
- Implementing **persistent storage** using localStorage  
- Dynamically creating, editing, and deleting tasks  
- Implementing a responsive **sidebar** with mobile functionality  
- Adding a **dark/light theme toggle**  
- Maintaining **clean, modular, and documented code**  

The app allows users to manage tasks efficiently while providing a polished, responsive interface that works seamlessly across devices.

---
## 🔗 Project Links
- **GitHub Repository:** [Brooklyn Treasurer JSLPP](https://github.com/BrooklynTreasurer/BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_JSLPP.git)  
- **Recorded Presentation Video:** [Watch Presentation](https://drive.google.com/file/d/1G4mdNG1wId571qNWdxmdirB8DbqIqbAA/view?usp=sharing)  
- **Website link:** [KanBan Board](https://kanbanv4.netlify.app)

---

## 🎯 Key Objectives  

### Task Board & Data Management
- Dynamically render tasks in their correct columns (**To Do / Doing / Done**)  
- Click tasks to open a **modal** for editing task details  
- Create **new tasks** using an "Add Task" modal  
- Delete tasks with a confirmation prompt  
- Persist tasks using **localStorage**, ensuring data remains after page refresh  
- Maintain responsive layout following the **Figma design**  

### Deployment & Hosting
- Prepare the Kanban app for deployment  
- Deploy the app to **Netlify** and provide a public link  
- Test all features (task creation, editing, deletion, persistence) in the live environment  

### Sidebar Functionality
- Desktop sidebar includes navigation and features per Figma layout  
- Toggleable sidebar to show/hide elements  
- Mobile sidebar accessible from the app logo, matching desktop features  
- Include theme toggle switch in both desktop and mobile sidebar  

### Theme Toggle (Dark/Light Mode)
- Functional dark/light mode switch  
- Switch works consistently on desktop and mobile  
- Ensures all UI elements maintain readability and proper contrast in both modes  

### Stretch Goal: Task Priority (Optional)
- Allow users to assign **High, Medium, or Low priority**  
- Display priority visually on task cards  
- Save priority in localStorage  
- Sort tasks by priority within each column (**High → Medium → Low**)  
- Persist order after page refresh  

---

## 🚀 Features  

- 🗂️ **Dynamic Task Rendering** – Tasks appear in correct columns instantly  
- ✍️ **Interactive Modal Editing** – Edit title, description, status, and priority  
- 🗑️ **Task Deletion** – Delete tasks with confirmation  
- ➕ **Add New Task Modal** – Create tasks with title, description, status, and optional priority  
- 💾 **Local Storage Persistence** – Tasks remain saved after refresh  
- 🎨 **Responsive UI** – Desktop and mobile layouts, sidebar toggle, and mobile menu  
- 🌗 **Theme Toggle** – Dark/light mode switch functional across devices  
- 🧩 **Modular Code** – Clean, maintainable ES modules with JSDoc documentation  

---

## 🛠️ Technologies Used  

- **HTML5 & CSS3**  
- **JavaScript (ES6 Modules)**  
- **Local Storage API**  
- **Responsive Design**  
- **Netlify Deployment**  

---

## 🖥️ Expected Outcome  

A fully functional, deployable Kanban app where:

- Tasks are dynamically fetched or created  
- Tasks can be edited or deleted through modals  
- Task board maintains data persistence with localStorage  
- Sidebar and theme toggle work seamlessly on desktop and mobile  
- Priority system orders tasks effectively (if implemented)  
- Application is deployed and accessible via Netlify  

---

## 📌 How to Use  

1. Open the deployed project link in a browser  
2. Tasks load automatically from localStorage  
3. Click a task to edit its details or delete it  
4. Click **“Add Task”** to create a new task  
5. Fill in the modal fields and submit  
6. Toggle the sidebar or theme as needed  
7. On mobile, access the sidebar/menu from the app logo  
8. Refresh the page — tasks and theme settings remain saved  

---

## ⚙️ Installation & Setup  

1. **Clone the repository**  
```bash
git clone https://github.com/BrooklynTreasurer/BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_JSLPP.git
```

2. **Navigate into the project folder**
```bash
cd BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_JSLPP
```

3. **Open in Visual Studio Code**
```
code .
```

4. **Run using Live Server** (recommended for ES Modules)

---