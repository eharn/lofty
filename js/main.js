const weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const links = [
    {
        name: "Weekly Exercise",
        folder : "assignment1/index.html",
        journal : "Journal",
        folder2 : "assignment1/journal.html"

    },
   {
        name: "Team Activity",
        folder: "assignment2/index.html",
        journal : "Journal",
        folder2 : "assignment2/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment3/index.html",
        journal : "Journal",
        folder2 : "assignment3/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment4/teamactivity.html",
        journal : "Journal",
        folder2 : "assignment4/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment5/index.html",
        journal : "Journal",
        folder2 : "assignment5/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment7/hiking-complete.html",
        journal : "Journal",
        folder2 : "assignment7/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment8/teamactivity.html",
        journal : "Journal",
        folder2 : "assignment8/journal.html"
        
    },
    {
        name: "Team Activity",
        folder: "assignment9/teamactivity.html",
        journal : "Journal",
        folder2 : "assignment9/journal.html"
        
    }                      

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

    if(i === 5){
    li.setAttribute('value', "7");
    }

    li.appendChild(a);
    li.appendChild(b);
    list.appendChild(li);

    i ++;



}