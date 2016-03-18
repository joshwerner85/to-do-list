

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





// // Each item should look like this <input type="checkbox">Enter New Item</input>
// function addNewItem(list) {
// 	var listItem = document.createElement("li");
// 	listItem.innerHTML = itemText;
	 
// 	list.appendChild(listItem);
	
// }

// var inItemText = document.getElementById("inItemText");
// 	inItemText.focus();

// var btnNew = document.getElementById("btnAdd");
// inItemText.onkeyup = function(event) {



// 	if (event.which == 13) {
// 	var itemText = inItemText.value;
// 	//var itemText = inItemText.value;

// 	if(!itemText || itemText == "" || itemText == " "){
// 		return false;
// 	}

// 	addNewItem(document.getElementById("todoList"), itemText);

// 	inItemText.focus();
// 	inItemText.select();

// 	}
// };


