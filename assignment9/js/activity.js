for (let item of document.querySelectorAll(".keys div")) {
    item.addEventListener("click", function (e){
        e.target.classList.add("active");
    }, false);
    console.log(item);
}
