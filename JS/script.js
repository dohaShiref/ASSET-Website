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

    const accorHeaders=document.querySelectorAll(".headers");
    accorHeaders.forEach(header=>{
        header.addEventListener("click",event=>{
            // header.classList.toggle("Rectangle-37-open");
            var next = header.nextElementSibling;
            if(header.classList.contains("Rectangle-37-open")){
                header.classList.toggle("Rectangle-37-close");
            }
            else{
                header.classList.toggle("Rectangle-37-open");
            }
            if (next.offsetHeight > 0) {
                next.style.height = "0px";
                
              } else {
                next.style.height = `${next.scrollHeight}px`;
                header.classList.toggle("Rectangle-37-open");
              }
        })
        
    })
  }

  const accordionItemHeaders = document.querySelectorAll(".accordionn-item-headerr");

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {


                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }

            });
        });