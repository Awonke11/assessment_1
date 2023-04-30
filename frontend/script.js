const form = document.querySelector(".nav-area");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let input = document.querySelector(".nav-area-input");
    let addButton = document.querySelector(".nav-area-icon");
    let todoListSection = document.querySelector(".main-todo-container");
    let completeListSection = document.querySelector(".main-completed-container");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (input.value === "") {
            alert("Please enter an item.")
        } else {
            let todoListSectionItem = document.createElement("div");
            todoListSectionItem.classList.add("main-todo-container-item");
            todoListSection.appendChild(todoListSectionItem);
        
            let todoListSectionMain = document.createElement("div");
            todoListSectionMain.classList.add("main-todo-container-item-main");
            todoListSectionMain.innerHTML = "<i class='fa-solid fa-circle'></i>";
            todoListSectionItem.appendChild(todoListSectionMain);
        
            let todoListSectionMainTitle = document.createElement("p");
            todoListSectionMainTitle.innerText = input.value;
            todoListSectionMainTitle.classList.add("main-todo-container-item-main-title");
            todoListSectionMain.appendChild(todoListSectionMainTitle);
        
            let todoListSectionToggle = document.createElement("div");
            todoListSectionToggle.classList.add("main-todo-container-item-toggle");
            todoListSectionToggle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
            todoListSectionItem.appendChild(todoListSectionToggle);

            
            todoListSectionMain.addEventListener("click", () => {
                let completeListSectionItem = document.createElement("div");
                    completeListSectionItem.classList.add("main-completed-container-item");
                    completeListSection.appendChild(completeListSectionItem);

                    let completeListSectionMain = document.createElement("div");
                    completeListSectionMain.classList.add("main-completed-container-item-main");
                    completeListSectionMain.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
                    completeListSectionItem.appendChild(completeListSectionMain);

                    let completeListSectionMainTitle = document.createElement("p");
                    completeListSectionMainTitle.innerText = todoListSectionMainTitle.textContent;
                    completeListSectionMainTitle.classList.add("main-completed-container-item-main-title");
                    completeListSectionMain.appendChild(completeListSectionMainTitle);

                    let completeListSectionToggle = document.createElement("div");
                    completeListSectionToggle.classList.add("main-completed-container-item-toggle");
                    completeListSectionToggle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
                    completeListSectionItem.appendChild(completeListSectionToggle);

                    completeListSectionToggle.addEventListener("click", () => {
                        completeListSection.removeChild(completeListSectionItem)
                    })

                    todoListSection.removeChild(todoListSectionItem)
            })
            
            todoListSectionToggle.addEventListener("click", () => {
                todoListSection.removeChild(todoListSectionItem);
            })

            input.value = "";
        }
    })
})




