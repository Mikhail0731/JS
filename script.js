
//select new element
const newTask = document.querySelector('#new-task')
const addTaskBtn = document.querySelector('#add-btn')
const taskList = document.querySelector('#task-list')

 const handleDeleteTask = (element) => {
    element.remove()
  }

const handleAddTask = () => {
//create new element
const newTaskLi =document.createElement('li')
const newTaskSpan =document.createElement('span')
const newTaskDeleteBtn =document.createElement('button')

//use append child to build the hierarchy
taskList.appendChild(newTaskLi)
newTaskLi.appendChild(newTaskSpan)
newTaskLi.appendChild(newTaskDeleteBtn)

//add classes to a new elements
newTaskLi.classList.add('task-container', 'list-group-item')
newTaskDeleteBtn.classList.add('btn', 'btn-danger')

//add content to a new elements
newTaskDeleteBtn.textContent ='x'
newTaskSpan.textContent = newTask.value

newTaskDeleteBtn.addEventListener('click', ()=>{
  handleDeleteTask(newTaskLi)
} )
}

// add event to the add button
addTaskBtn.addEventListener('click', handleAddTask)


