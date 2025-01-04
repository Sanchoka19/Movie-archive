const listContainer = document.getElementById("ul-list");
const inputValue = document.getElementById("input-element");
const add = document.getElementById("add-button");

let addElem = () => {
    if (inputValue.value === "") {
        alert("Input Name Of Movie");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10008";
        li.appendChild(span);
    }
    inputValue.value = "";
    saveDate();
}

add.addEventListener("click", addElem);



listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("ul-item");
        saveDate();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
console.log(e.target.tagName);

})

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML)
}


const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
