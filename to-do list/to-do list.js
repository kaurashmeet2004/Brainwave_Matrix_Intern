let listContainer = document.getElementById('list-box')
let inputBox=document.getElementById('input-box')

function addtask(){
    if(inputBox.value===' '){
        alert("No text added")
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        let span =document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span)
    }
    inputBox.value=' '
    saveData()
}
listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('tasks')
}
showData()