// Updated list.js to fix item addition functionality

console.log("js is running");
// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    let removeButtonCreated=false;
document.getElementById('itemForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const ListItem=document.getElementById('itemList');
    
    const itemInput = document.getElementById('task');
    const itemValue = itemInput.value.trim();
    if (!itemValue) {
        alert('Please enter a valid item.');
        return;
    }
    addItemToList(itemValue);
    itemInput.value = ''; // Clear the input field
    if (!removeButtonCreated){
        const removeButton=document.createElement('button');
        removeButton.type='button';
        removeButton.textContent='remove';
        removeButton.id="removeButton";
        removeButton.addEventListener('click', removeItemFromList);
            document.getElementById('itemForm').appendChild(removeButton);
            removeButtonCreated = true;
        
    }
    const rb=document.getElementById('removeButton');
    if(rb){
        if (ListItem.children.length === 0){
            rb.remove();
        }
        
    }
    
    
    };
}) 

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
    // function to remove item from the list
// it acts as a undo button it takes the item that was added last
// it removes its list item
function removeItemFromList(item){
    const itemList = document.getElementById('itemList');
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
}

// Other initialization code here...
