const newTask = document.getElementById("new-tasks");

newTask.onsubmit = function (e) {
	e.preventDefault();
	const taskName = document.getElementById("task").value;
	addTask(taskName)
}

function addTask(task){
	const list = document.getElementById("task-list")
	const taskBox = document.createElement("div")
	const checkBox = document.createElement("input")
	const name = document.createElement("label")

	checkBox.setAttribute('type', 'checkbox')
	checkBox.setAttribute('id', task)
	checkBox.setAttribute('name', task)


	const setName = document.createTextNode(task)
	name.setAttribute("for", task)
	name.appendChild(setName)

	taskBox.appendChild(checkBox)
	taskBox.appendChild(name)

	list.appendChild(taskBox)
	taskBox.classList.add("box")
}
