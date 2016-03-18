

var userInput = document.querySelector('.userInput');
var toDoItems = document.querySelector('.toDoItems');
var toDoList = document.querySelector('.toDoList');
var addButton = document.querySelector('.addBtn');
var resetBtn = document.querySelector('.resetBtn');
var enterInput = [];
var newListItems = '';


function clearText() {
   toDoItems.value = '';
}

function render() {
   toDoList.innerHTML = '';
   newListItems = '';
   for (var i = 0; i < enterInput.length; i++) {
       newListItems += enterInput[i] + '<br>';
       toDoList.innerHTML = newListItems;
   }
}
toDoItems.addEventListener('click', clearText);
addButton.addEventListener('click', function() {
   enterInput.push(toDoItems.value);
   render();
   console.log(toDoItems.value);
});
resetBtn.addEventListener('click', function() {
   enterInput = [];
   newListItems = '';
   toDoList.innerHTML = '';
});



 