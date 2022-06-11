function alertFunc() {
    alert("You clicked the button C:");
}

function userConfirm() {
    let confirmation = confirm("You clicked the button Are You sure?");

    if (confirmation) {
        return alert("You Pressed OK C;");
    } else {
        return alert("You Pressed Cancel :C");
    }
}

function changeColor() {
    let divElement = document.getElementById("extraDiv");

    divElement.className = "whiteDiv";
}

function returnColor() {
    let divElement = document.getElementById("extraDiv");
    divElement.className = "leftDiv";
}

function changeText() {
    let divElement = document.getElementById("textDiv");
    divElement.innerHTML = "Cleaned :c";
}

function changeBtn() {
    let divElement = document.getElementById("textBtn");
    divElement.value = "You changed the text in left button";
}

function addTask() {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML =
            '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
            '<input type="button" class="markImportant" onclick="makeImportant(this.parentNode)" value="!">' +
            newTask;
        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        input.value = "";
        input.placeholder = "Add new task ...";
    }
}

// change styling used for given item
function markDone(item) {
    item.className = "finished";
}

function remove(item) {
    if (item.className == "finished") {
        // remove item completely from document
        item.remove();
    } else {
        return alert("You can't delete undone tasks!");
    }
}

function doAbout() {
    let item = document.getElementById("divAbout");
    item.innerHTML = "Author is Pedro :)";
    item.className = "yellowbackground";
}

function clearAbout() {
    let item = document.getElementById("divAbout");
    item.innerHTML = "";
}

function makeImportant(item) {
    item.className = "important";
}
