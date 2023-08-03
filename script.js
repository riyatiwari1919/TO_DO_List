function makeAnimation(value){
    document.querySelector("." + value).classList.add("clicked");

    setTimeout(function(){
        document.querySelector("." + value).classList.remove("clicked");
    },100);
}

function createUl(){
    var newUl = document.createElement("ul");
    newUl.classList.add("task-list");
    document.querySelector(".task-box").appendChild(newUl);
}

function addTask(){
        
    var enteredTask = document.querySelector(".input").value;
    
    if (enteredTask == ""){
            alert("Enter Task");
    }
    else{
        console.log("Task added: " + enteredTask);

        var newLi = document.createElement("li");
        newLi.classList.add("task-list-li");
        document.querySelector(".task-list").appendChild(newLi);

        var newLiCheckbox = document.createElement("input");
        newLiCheckbox.type = "checkbox";
        newLiCheckbox.classList.add("checkbox");
        newLi.appendChild(newLiCheckbox);
        
        var newLiDiv = document.createElement("div");
        newLiDiv.classList.add("task-text");
        newLi.appendChild(newLiDiv);
        newLiDiv.innerHTML = enteredTask;

        var newLiBtn = document.createElement("button");
        newLiBtn.classList.add("cross-btn");
        newLi.appendChild(newLiBtn);
        newLiBtn.innerHTML = "X";

        newLiCheckbox.addEventListener("click", function(){
            newLiDiv.classList.toggle("done");
            console.log("Task completed : " + newLiDiv.innerHTML);
        });

        var totalLibtns = document.querySelectorAll(".cross-btn").length;
        for(var i=0; i<totalLibtns; i++){
            document.querySelectorAll(".cross-btn")[i].addEventListener("click", function(){
                var removedTask = this.parentElement.firstChild.nextElementSibling.innerHTML;
                console.log("Task removed : " + removedTask);
                this.parentElement.remove();
            });
        }
        document.querySelector(".input").value = "";
    }
}

document.querySelector(".add-btn").addEventListener("click", function(){
    makeAnimation("add-btn");
    addTask();    
});

document.querySelector(".input").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        makeAnimation("add-btn");
        addTask();
    }
});

document.querySelector(".clear-btn").addEventListener("click", function(){
    if (document.querySelectorAll("li").length == 0){
        alert("Enter Task");
    }
    else{
        makeAnimation("clear-btn");
        document.querySelector(".task-list").remove();
        console.log("All tasks Cleared!");
        createUl(); 
    }
});
