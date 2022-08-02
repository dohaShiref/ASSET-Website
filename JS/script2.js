var pageNubers = document.getElementsByClassName(".current-page");
pageNubers.forEach((current_pag) => {
    current_pag.addEventListener('click',function () {
        current_pag.classList.toggle("active");
    });
});