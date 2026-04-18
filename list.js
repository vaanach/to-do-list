// Updated list.js to fix item addition functionality

// Function to handle form submission
document.getElementById('itemForm').onsubmit = function getAndUseText(event) {
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
    listItem.innerHTML = `<input id="box" type='checkbox'/> <label for="box">${item}</label>`;
    itemList.appendChild(listItem);
}

    // take the item of checked box
    // change its css text-decor to line-through
    
//add a line through effect from css text-decoration if a box has been check
const checkbox=document.getElementById("box");
checkbox.addEventListener('change', function(){
    if (this.checked) {
    const label = document.querySelector(`label[for="${this.id}"]`);
    label.style.text-decoration="line-through";
  }
        // add function to strike out text

});

// Other initialization code here...
