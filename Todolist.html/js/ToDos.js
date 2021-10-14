// const form = document.forms[0];
const button = document.querySelector('button');
button.addEventListener('click', listfunction);

function listfunction() {
    document.querySelector('#output').innerHTML =
    `     <li class="itemLine">
           <label for="${listItem}" class="itemLabel">
             <input type="checkbox" name="${listItem}" class="checkbox">${listItem}</input>
           </label>
             <button name="${listItem}Delete" class="itemDelete">❌</button>
          </li>`

    
        // let li = document.createElement('li')
        // let label = document.createElement('label')
        // let checkbox = document.createElement('input')
        // label.textContent = listItem
        // label.setAttribute('for', listItem)
        // checkbox.setAttribute('type', 'checkbox')
        // checkbox.setAttribute('name', listItem)
        // let deletebutton = document.createElement('button');
        // li.textContent = listItem.value;
        // deletebutton.textContent = 'X';
        // li.append(checkbox)
        // li.append(label)
        // li.append(deletebutton);
        // document.querySelector("#output").append(li);
        let key = label.textContent;
        let value = checkbox.name;
        localStorage.setItem(key, value);
        // input.value = ''; //this clears input field after li item created
        // listItem.focus; //resets focus so it can listen for a new entry
        deletebutton.addEventListener('click', function () {
            output.removeChild(li); //go to the output and remove child of the parent called li, because we placed the X as a child element of each li
            localStorage.removeItem(key)
            listItem.focus;
        });
        checkbox.addEventListener('change', function () {
            localStorage.getItem(key)
            localStorage.setItem(key, "completed")
        })
    }
}

function storeItem(listfunction) {
    console.log(listfunction);
    // let storekey = listfunction(key)
    // let value = listfunction(value)
    localStorage.setItem(key, value)
}

class toDoList {
    constructor()
}