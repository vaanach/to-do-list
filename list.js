let list = [];
let ab = "candy";
list.push(ab);
list.push("cane");

// Function to create a new list item with checkbox

    
}
function createListItem(text, index) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.id = `l${index}`;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `c${index}`;
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    ul.appendChild(li);
}

// Function to add new items to the list
function addItem(text) {
    list.push(text);
    createListItem(text, list.length - 1);
}

// Function to display all items in the list
function displayAllItems() {
    const ul = document.querySelector('ul');
    ul.innerHTML = ''; // Clear existing items
    
    list.forEach((item, index) => {
        createListItem(item, index);
    });
}

// Initialize the display when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayAllItems();
});
function getAndUseText(){
    const inputEl=documenet.getElementById("task");
    const inputTxt=inputEl.value;
    addItem(inputTxt);
}

// Example: Add a new item (you can call this function to add more items)
// addItem("new task");
addItem("some task")
