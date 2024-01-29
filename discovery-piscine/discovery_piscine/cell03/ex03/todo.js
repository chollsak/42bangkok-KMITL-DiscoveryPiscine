// Function to open the prompt for new TO DO
function openPrompt() {
    const todoText = prompt("Enter a new TO DO:");
    if (todoText !== null && todoText.trim() !== "") {
        addToDo(todoText, 1);
    }
}

// Function to add a new TO DO to the list
function addToDo(text, save) {
    const ftList = document.getElementById("ft_list");
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.textContent = text;

    // Add click event to remove the TO DO
    todoItem.addEventListener("click", function () {
        const confirmRemove = confirm("Do you want to remove this TO DO?");
        if (confirmRemove) {
            ftList.removeChild(todoItem);
            saveToCookie();
        }
    });

    // Add the new TO DO at the top of the list
    ftList.insertBefore(todoItem, ftList.firstChild);
    if (save) saveToCookie();
}

// Function to save the TO DO list to a cookie
function saveToCookie() {
    const ftList = document.getElementById("ft_list");
    const todoItems = ftList.getElementsByClassName("todo-item");
    const todoArray = Array.from(todoItems).map(item => item.textContent);

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 7 * 24 * 60 * 60);

    document.cookie = "todoList=" + encodeURIComponent(JSON.stringify(todoArray)) + "; " + "expires=" + 
                        expirationDate.toUTCString();
}

// Function to load the TO DO list from a cookie
function loadFromCookie() {
    const cookieValue = document.cookie.split('=');
    if (cookieValue) {
        const todoList = JSON.parse(decodeURIComponent(cookieValue[1]));
        todoList.reverse();
        todoList.forEach(todo => addToDo(todo, 0));
    }
}

// Load TO DO list from cookie when the page loads
window.onload = loadFromCookie;
