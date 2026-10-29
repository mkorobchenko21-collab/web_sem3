console.log('script.js connected');

// Remove static placeholder card
const staticCard = document.querySelector('.card');
if (staticCard) {
	staticCard.remove();
}

// Array of tasks for the Kanban board
const tasks = [
	{ title: 'Prepare API specification', status: 'To Do' },
	{ title: 'Create database', status: 'To Do' },
	{ title: 'Semantic board markup', status: 'In Progress' },
	{ title: 'Initialize Git repository', status: 'Done' },
	{ title: 'Configure editor and extensions', status: 'Done' }
];

// Column containers
const todoList = document.querySelector('#todo-list');
const inProgressList = document.querySelector('#inprogress-list');
const doneList = document.querySelector('#done-list');

// Arrow function to check if a task has 'Done' status
const isDone = task => task.status === 'Done';

// Render task cards into column containers
function renderTasks(taskList) {
	taskList.forEach(task => {
		const card = document.createElement('article');
		card.classList.add('card');
		card.dataset.status = task.status;

		if (isDone(task)) {
			card.classList.add('done');
		}

		const title = document.createElement('h3');
		title.textContent = task.title;
		card.append(title);

		if (task.status === 'To Do') {
			todoList.append(card);
		} else if (task.status === 'In Progress') {
			inProgressList.append(card);
		} else if (task.status === 'Done') {
			doneList.append(card);
		}
	});
}

// Initial render of tasks
renderTasks(tasks);

// Update summary element with completed tasks count
const doneCountElement = document.querySelector('#done-count');
if (doneCountElement) {
	const doneCount = tasks.filter(isDone).length;
	doneCountElement.textContent = `Completed tasks: ${doneCount}`;
}

// Function to count the number of tasks in each status
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

// Function to classify tasks and mark tasks with 'Done' status
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

// Demonstrate data processing in console
countTasksByStatus(tasks);
displayClassifiedTasks(tasks);

// Verify isDone arrow function
console.log(`Checking isDone for "${tasks[0].title}":`, isDone(tasks[0]));
console.log(`Checking isDone for "${tasks[3].title}":`, isDone(tasks[3]));
