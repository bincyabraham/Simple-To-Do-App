function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("tasklist");
    const taskText=taskInput.value.trim();
    if(taskText==="")
        {
            return;
        }
        const listItem=document.createElement("li");
        listItem.textContent=taskText;
        taskList.appendChild(listItem);
        taskInput.value="";
}