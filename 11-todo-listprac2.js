let arr = [{
  name:'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
renderTodolist();

function renderTodolist(){
let todoListHTML = '';

for(let i=0;i<arr.length;i++){
 const todoObject = arr[i];
 // const name = todoObject.name;
  
 const { name,dueDate } = todoObject;
 const html = `
 <div>${name}</div>
 <div>${dueDate}</div> 
 <button onclick="
    arr.splice(${i},1);
    renderTodolist();
 " class="delete-todo-button">Delete</button>
 
 `;
 todoListHTML+=html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo(){

  
  let input = document.querySelector('.js-name');
  let value = input.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  arr.push({
    name: value,
    // dueDate: dueDate
    dueDate
  });
 

  input.value = '';

  renderTodolist();
}