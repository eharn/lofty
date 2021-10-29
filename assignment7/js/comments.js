//get user input
const button = document.querySelector('#commentbutton');
button.addEventListener('click', makeList, false);

let commentarray = [];

function makeList() {
 
  const comment = document.querySelector("#hikecomment").value;
  const type = document.querySelector("#type").value;
  if (localStorage.getItem('commentarray') !== null) {
    commentarray = JSON.parse(localStorage.getItem('commentarray'));
  }

  if (comment !== '') {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    let hikereview = {
      name: document.querySelector('#hikesselect').value,
      date: `${month} / ${day} / ${year}`,
      content: comment,
      type: type
    };
    commentarray.push(hikereview);
    localStorage.setItem('commentarray', JSON.stringify(commentarray));
    console.log(commentarray);
  }

}