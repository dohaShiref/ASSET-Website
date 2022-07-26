$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

var search=document.getElementById('navBar-search');
var closeSear=document.getElementById('closesearch');
var searchSection=document.getElementById('search-section');
var navbarSection=document.getElementById('navBarSec');
search.addEventListener('click',function () {
    // navbarSection.style.backgroundColor='white';
    navbarSection.classList.toggle("active");
    searchSection.classList.remove("active");
});
closeSear.addEventListener('click',function () {
    navbarSection.classList.remove("active");
    searchSection.classList.toggle("active");
});

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

        const accordionItemHeaders2 = document.querySelectorAll(".accordionn-item-headerr2");

        accordionItemHeaders2.forEach(accordionItemHeader2 => {
            accordionItemHeader2.addEventListener("click", event => {


                accordionItemHeader2.classList.toggle("active");
                const accordionItemBody2 = accordionItemHeader2.nextElementSibling;
                if (accordionItemHeader2.classList.contains("active")) {
                    accordionItemBody2.style.maxHeight = accordionItemBody2.scrollHeight + "px";
                }
                else {
                    accordionItemBody2.style.maxHeight = 0;
                }

            });
        });

var navItem=document.getElementsByClassName("nav-item");
navItem.addEventListener('click',function(){
    navItem[0].classList.toggle('cli');
})