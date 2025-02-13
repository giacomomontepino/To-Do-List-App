let input = document.querySelector("input");    
let button = document.querySelector("button");

button.addEventListener("click", onClick)

function onClick(e){
    e.preventDefault();

    if(input.value === ""){
        alert("Inserisci qualcosa");
        return;
    }

    let divList = document.createElement("div");
    divList.className = "list";
    document.body.appendChild(divList);

    let ul = document.createElement("ul");
    divList.appendChild(ul);

    let li = document.createElement("li");
    li.className = "item";
    li.textContent = input.value;
    ul.appendChild(li);

    let buttonItem = document.createElement("input");
    buttonItem.type = "checkbox";
    buttonItem.className = "checkbox";
    li.appendChild(buttonItem);

    let divButton = document.createElement("div");
    divButton.className = "divDelete";
    divList.appendChild(divButton);

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteButton";
    buttonDelete.textContent = "X";
    divButton.appendChild(buttonDelete);

    input.value = "";
}

document.body.addEventListener("click", function(e){
    if(e.target.className === "deleteButton"){
        e.target.parentElement.parentElement.remove();
    }
})
