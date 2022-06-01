function alertFunc(){
    alert("You clicked the button C:")
}

function userConfirm(){
    let confirmation = confirm("You clicked the button Are You sure?")

    if(confirmation){
        return alert("You Pressed OK C;")
    }
    else{
        return alert("You Pressed Cancel :C")
    }
}