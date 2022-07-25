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

    // if(window.innerWidth<767){
        var next = el.nextElementSibling;
            
        if (next.offsetHeight > 0) {
            next.style.height = "0px";
            
          } else {
            next.style.height = `${next.scrollHeight}px`;
          
    }
    
    }

    const megaMenumHeaders = document.querySelectorAll("MegaMenu-header");

    megaMenumHeaders.forEach(Header => {
        Header.addEventListener("mouseenter", event => {   
                const accordionItemBody = Header.nextElementSibling;
                if (accordionItemBody.offsetHeight==0) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }

            });
        });

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