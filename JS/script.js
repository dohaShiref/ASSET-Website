$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


function slideDown(el) {
    
    // var element=document.getElementById("cl1");

    var headers=document.querySelectorAll(".header");
    headers.forEach(headers=>{
        headers.addEventListener("click",event=>{
            headers.classList.toggle("Rectangle-37-open");
            var next = headers.nextElementSibling;
            if (next.offsetHeight > 0) {
                next.style.height = "0px";
                headers.classList.toggle("Rectangle-37-close");
              } else {
                next.style.height = `${next.scrollHeight}px`;
                // headers.classList.toggle("Rectangle-37-open");
              }
        })
        
    })
  }