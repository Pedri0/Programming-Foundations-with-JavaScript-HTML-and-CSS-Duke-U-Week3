function alertFunc(){
    alert("You clicked the button C:")
}

function userConfirm(){
    let confirmation = confirm("You clicked the button Are You sure?");

    if(confirmation){
        return alert("You Pressed OK C;")
    }
    else{
        return alert("You Pressed Cancel :C")
    }
}

function changeColor(){
    let divElement = document.getElementById("extraDiv");

    divElement.className = "whiteDiv";
}

function returnColor(){
    let divElement = document.getElementById("extraDiv");
    divElement.className = "leftDiv";
}

function changeText(){
    let divElement = document.getElementById("textDiv");
    divElement.innerHTML = "Cleaned :c"
}

function changeBtn(){
    let divElement = document.getElementById("textBtn");
    divElement.value = "You changed the text in left button"
}