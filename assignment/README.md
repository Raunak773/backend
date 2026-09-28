Notes / Todo App

A simple and user-friendly Notes/Todo application built using HTML, CSS, and JavaScript. The application allows users to create, edit, complete, delete, and manage tasks with different priority levels. All tasks are stored locally using the browser's Local Storage, ensuring data persistence even after refreshing the page.

🚀 Features
✅ Add new tasks
✅ Edit existing tasks
✅ Delete tasks individually
✅ Mark tasks as completed/incomplete
✅ Priority-based task categorization:
High Priority
Medium Priority
Low Priority
✅ Clear all tasks at once
✅ Local Storage support for data persistence
✅ Responsive and clean user interface
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
Browser Local Storage API
📂 Project Structure
Plain Text
project/
│
├── index.html
├── README.md
│
└── Assets (Optional)
Show more lines
💻 How to Run the Project
Download or clone the repository:
Shell
git clone https://github.com/your-username/notes-todo-app.git
Show more lines

Open the project folder.

Launch index.html in any modern web browser.

No additional installation or dependencies are required.

🎯 Application Workflow
User enters a task in the input field.
User selects a priority level.
Clicking the Add button stores the task in Local Storage.
Tasks are displayed in a list with color-coded priorities.
Clicking on a task toggles its completion status.
Users can:
Edit task details
Delete specific tasks
Clear all tasks
Data remains available after page refresh due to Local Storage.
🎨 Priority Color Coding
Priority	ColorHigh	Light Red
Medium	Light Yellow
Low	Light Green
🔑 Key JavaScript Functions
getTasks()

Retrieves task data from Local Storage.

saveTasks(tasks)

Saves the updated tasks array into Local Storage.

renderTasks()

Renders all tasks dynamically on the page.

addTask()

Adds a new task to the task list.

clearAll()

Removes all tasks from Local Storage and refreshes the UI.

⚠️ Challenges Faced During Development
1. Managing Local Storage Data

One of the main challenges was storing and retrieving tasks efficiently using Local Storage. Since Local Storage only stores strings, task objects had to be converted using:

JavaScript
JSON.stringify()
Show more lines

and retrieved using:

JavaScript
JSON.parse()
Show more lines
2. Dynamic DOM Manipulation

Creating task elements dynamically and updating them whenever a task was added, edited, deleted, or completed required proper DOM manipulation techniques.

3. Synchronizing UI with Data

Ensuring that every change made to a task was immediately reflected in both:

The user interface
Local Storage

required re-rendering the task list after each operation.

4. Handling Task Completion States

Implementing task completion functionality required maintaining a boolean status (completed) and updating the visual appearance using CSS classes.
