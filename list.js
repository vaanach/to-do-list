// Updated list.js to fix item addition functionality

// Function to handle form submission
document.getElementById('itemForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const itemInput = document.getElementById('task');
    const itemValue = itemInput.value.trim();
    if (!itemValue) {
        alert('Please enter a valid item.');
        return;
    }
    addItemToList(itemValue);
    itemInput.value = ''; // Clear the input field
};

// Function to add item to the list
function addItemToList(item) {
    const itemList = document.getElementById('itemList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type='checkbox'/> ${item}`;
    itemList.appendChild(listItem);
}

// Other initialization code here...
