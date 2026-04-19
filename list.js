// Updated list.js to fix item addition functionality

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('itemForm').onsubmit = function (event) {
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
};
// Function to add item to the list
function addItemToList(item) {
    const itemList = document.getElementById('itemList');
    const listItem = document.createElement('li');
    const checkboxId=`box-${Date.now()}`;
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.id=checkboxId;
    checkbox.className='box';
    const label=document.createElement('label');
    label.htmlFor=checkboxId;
    label.textContent=item;
    
    
checkbox.addEventListener('change', function(){
    if (this.checked) {
    
    label.style.textDecoration="line-through";
  }else {
        label.style.textDecoration="none";
}
});
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    itemList.appendChild(listItem);
}
    

// Other initialization code here...
