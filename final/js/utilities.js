export function getName() {
const name = localStorage.getItem('name');
// if(!name){
//     document.querySelector('#helloName').innerHTML = 'Good Morning';
// } else {
//     document.querySelector('#helloName').innerHTML = `Good Morning ${name}`;
// }
return name;
}