const weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const links = [
    {
        name: "Weekly Exercise",
        folder : "assignment1/index.html",
        journal : "Journal",
        folder2 : "assignment1/journal.html"

    },
  /* {
        name: "Weekly Exercise",
        folder: "assignment2/index.html",
        journal : "Journal",
        folder2 : "assignment2/jounral.html"
        
    }  */
]
let i = 0;
const list = document.getElementById("list");

links.forEach(getAssignments);

function getAssignments() {

    const li = document.createElement('li');
    const a = document.createElement('a');
    const b = document.createElement('a');

    a.innerHTML = links[i].name;
    b.innerHTML = "<br>" + links[i].journal;
    a.setAttribute('href', links[i].folder);
    b.setAttribute('href', links[i].folder2);
    li.appendChild(a);
    li.appendChild(b);
    list.appendChild(li);

    i ++;
}


