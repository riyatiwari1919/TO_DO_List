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
        document.querySelector(".update-btn").innerHTML = "Edit";
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

var c = 0;
document.querySelector(".update-btn").addEventListener("click", function(){
    makeAnimation("update-btn"); 
    
    if (document.querySelectorAll("li").length == 0){
        alert("Enter Task");
    }
    else{
        if(this.innerHTML == "Edit"){
            var totalTask = document.querySelectorAll(".task-text").length;
            for (var i=0; i<totalTask; i++){
                document.querySelectorAll(".task-text")[i].addEventListener("click", function(){
            
                    c = c+1;
                    console.log("Task to be edited : ",this.innerHTML);
                    //this.classList.add("bg-white","border-blue");
                    this.classList.toggle("bg-white");
                    this.classList.toggle("border-blue");
                    
                    if(c%2 != 0){
                        document.querySelector(".input").value = this.innerHTML;
                    }
                    else{
                        document.querySelector(".input").value = "";
                    }
                    document.querySelector(".input").addEventListener("keypress", function(){
                        document.querySelector(".update-btn").innerHTML = "Save";
                    });
                    
    
                });
            }
        }
        else if (this.innerHTML == "Save"){
            if(document.querySelector(".input").value == ""){
                alert("Choose Task");
                document.querySelector(".update-btn").innerHTML = "Edit";
            }
            else{
                var editedTask = document.querySelector(".input").value;
                document.querySelector(".bg-white").innerHTML = editedTask;
                console.log("Edited Task : ",editedTask);
    
                document.querySelector(".update-btn").innerHTML = "Edit";
    
                document.querySelector(".bg-white").classList.remove("bg-white","border-blue");    
                document.querySelector(".input").value = "";  
            }
            
        }      
    }    
});

document.querySelector(".clear-btn").addEventListener("click", function(){
    if (document.querySelectorAll("li").length == 0){
        alert("Enter Task");
    }
    else{
        document.querySelector(".update-btn").innerHTML = "Edit";
        makeAnimation("clear-btn");
        document.querySelector(".task-list").remove();
        console.log("All tasks Cleared!");
        createUl(); 
    }
});
