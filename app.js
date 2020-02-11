let todoCounter, todo;
window.onload = () => {
    todo = [];
    todoCounter = 0;
    let addButton = document.querySelector('.add');
    addButton.addEventListener('click', addToTodo);
}

//Function add to Array
const addToTodo = (e) => {
    e.preventDefault();
    if(limitReached())
    {
        //display warning
        alert('limit');
        return false;
    }
    let item = null;
    //take item
    item = document.querySelector('.todo-input');
    //alert(item);
    if(item !== '')
    {
        todo.push(item.value);
        clearInput(item);
        todoCounter++;
    }
    else
    {
        //display error
        alert('Not valid input');
    }
}

//function check if array is greater than 12
const limitReached = () => {
    if (todoCounter == 12)
    {
        return true;
    }
    else if (todoCounter < 12)
    {
        return false;
    }
}

//Clear input after adding
const clearInput = (input) => {
    input.value = '';
}

//Delete elements from todo
const deleteItem = (item) => {

}

//Clear the todo list
const clearTodo = () => {
    todo.length = 0;
    //update view
}

//Edit todo

//Display warning or error

//Expand todo item


//Pop Up Input

//Pop Up Edit

//function update view
