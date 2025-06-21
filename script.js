/**
 * Prompts the user to enter a valid status for a task.
 * Accepts only "todo", "doing", or "done" (only accepts lowercase despite user input style).
 * Repeats until a valid input is received.
 *
 * @param {number} taskNumber - The task number (for display in the prompt)
 * @returns {string} - A valid task status
 */

function getValidStatus(taskNumber) {
  let status;
  const validStatuses = ["todo", "doing", "done"];

  do {
    status = prompt(`Enter the status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();

    if (!validStatuses.includes(status)) {
      alert(`❌ Invalid status: "${status}". Please enter "todo", "doing", or "done".`);
      console.log(`❌ Invalid status entered: "${status}"`);
    }

  } while (!validStatuses.includes(status)); // Repeat until input is valid

  return status;
}


// Prompt for task details
let task1 = {
  title: prompt("Enter the title for Task 1:"),
  description: prompt("Enter the description for Task 1:"),
  status: getValidStatus(1)
};

let task2 = {
  title: prompt("Enter the title for Task 2:"),
  description: prompt("Enter the description for Task 2:"),
  status: getValidStatus(2)
};

// Store tasks in an array
const tasks = [task1, task2];

// Filter tasks marked as "done"
const completedTasks = tasks.filter(task => task.status === "done");

// Display results in the console
if (completedTasks.length > 0) {
  console.log("✅ Completed Tasks:");
  completedTasks.forEach(task => {
    console.log(`- ${task.title} [${task.status}]`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}

