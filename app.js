//select the form element to style
const form = document.getElementById('registrar');

//grabbing user input
const input = document.querySelector('input');

// getting input names and display on the screen
const ul = document.getElementById('invitedList');

function createLI(text){
    const li = document.createElement('li');
    li.textContent = text;
    // displaying the check box on the screen
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    //remove the box
    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);
    return li;
}

form.addEventListener('submit' , (e)=> {
    e.preventDefault(); // cancel default submit behavior
    const text = input.value;
    input.value = '';
    const li = createLI(text);
    ul.appendChild(li);
});

ul.addEventListener('change', (e)=> {
    const checkbox = event.target;
    const checked = checkbox.checked;
    // traverse to the list item 
    const listItem = checkbox.parentNode.parentNode;
    if(checked){
        listItem.className="responded";
    }
    else {
        listItem.className="";
    }
});

ul.addEventListener('click',(e) =>{
    if(e.target.tagName ==='BUTTON'){
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }

});