console.log('script.js connected');

// Array of tasks for the Kanban board
const tasks = [
	{ title: 'Prepare API specification', status: 'To Do' },
	{ title: 'Create database', status: 'To Do' },
	{ title: 'Semantic board markup', status: 'In Progress' },
	{ title: 'Initialize Git repository', status: 'Done' },
	{ title: 'Configure editor and extensions', status: 'Done' }
];

// Arrow function to check if a task has 'Done' status
const isDone = task => task.status === 'Done';

// Function to count the number of tasks in each status using a for...of loop and if statements
function countTasksByStatus(taskList) {
	let todoCount = 0;
	let inProgressCount = 0;
	let doneCount = 0;

	for (const task of taskList) {
		if (task.status === 'To Do') {
			todoCount++;
		} else if (task.status === 'In Progress') {
			inProgressCount++;
		} else if (task.status === 'Done') {
			doneCount++;
		}
	}

	console.log('Task count by status:');
	console.log(`To Do: ${todoCount}`);
	console.log(`In Progress: ${inProgressCount}`);
	console.log(`Done: ${doneCount}`);
}

// Function to classify tasks using a condition and mark tasks with 'Done' status
function displayClassifiedTasks(taskList) {
	console.log('Task classification:');
	for (const task of taskList) {
		if (isDone(task)) {
			console.log(`[Done] ${task.title} - completed`);
		} else {
			console.log(`[${task.status}] ${task.title} - in progress`);
		}
	}
}

// Function calls demonstrating data processing
countTasksByStatus(tasks);

displayClassifiedTasks(tasks);

// Call arrow function isDone with real data
console.log(`Checking isDone for "${tasks[0].title}":`, isDone(tasks[0]));
console.log(`Checking isDone for "${tasks[3].title}":`, isDone(tasks[3]));
