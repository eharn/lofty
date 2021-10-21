// create to do list

// button add listener add list
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', makeList, false);
let todoList = [];

var timestamp = new Date().getTime();



function makeList() {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    document.querySelector('#output').innerHTML = '';
    const item = getItem();
    if (item === '') {
        document.querySelector('#output').innerHTML =
            `<p>Add an item to your list</p>`;   
    }
    else {
    let key = {}
    const log = getObj(item, key);
    const list = getList(log);
    }


function getItem() {
    const itemValue = document.querySelector("#listItem").value;
    document.querySelector('#listItem').value = '';
        return itemValue;

    
}

function getObj(item, key) {

    todoList.push(key);
    

    key.timestamp = timestamp;
    key.value = item;
    key.status = false;
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    const list = JSON.parse(localStorage.getItem('todoList', JSON.stringify(todoList)));
    return list;
}

function getList(log) {
    let i = 0;
    for (i; i < log.length; i++) {
        itemName = log[i].value;

        if (itemName != '') {
             let li = document.createElement('li');
             let label = document.createElement('label');
             let checkbox = document.createElement('input');
             label.textContent = itemName;
             li.setAttribute('data-key', new Date().getTime());
             label.setAttribute('for', itemName);
             checkbox.setAttribute('type', 'checkbox')
             checkbox.setAttribute('name', itemName);
             
        
            let d = label.textContent;
            let ts = li.getAttribute('data-key');
            console.log(ts);
            let deletebutton = document.createElement('button');

            //  li.textContent = itemName;
             deletebutton.textContent = '❌';

             li.append(checkbox)
             li.append(label)
             li.append(deletebutton);
             document.querySelector("#output").append(li);
            
             deletebutton.addEventListener('click', function(){
                 let itemNum = localStorage.getItem('todoList', timestamp);
                //console.log(itemNum);
                 //console.log(todoList[0].timestamp);
                 for (i=0; i < todoList.length; i++) {
                     if (todoList[i].value === d && todoList[i].timestamp === itemNum) {
                         output.removeChild(li);
                         //localStorage.removeItem('todoList', )
                     }
                    
                 }
               
             })
             
        }

    }

}

}
        // document.querySelector('#output').innerHTML =
        //     `<li class="itemLine">
        //     <input type="checkbox" name="${itemName}" class="checkbox">
        //     <label for="${itemName}" class="itemLabel">${itemName}</label>
        //     <button name="${itemName}Delete" class="itemDelete">\u2718</button></li>`;

