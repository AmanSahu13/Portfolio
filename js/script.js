

// Fileter Able Project Gallery...................
window.addEventListener('load', () => {
    let allTab = document.querySelectorAll('.tab');
    let allproject = document.querySelectorAll('.project');

    // Remove-TabActive.....
    const removeActive=() => allTab.forEach(tab => {
        tab.classList.remove('tab-active');
    })

    allTab.forEach(tab => {
        // Add-TabActive.....
        tab.addEventListener('click', (event) => {
            removeActive();
            tab.classList.add('tab-active');
        
        let filterName = event.target.getAttribute('data-name');
        allproject.forEach(project => {
            let projectName = project.getAttribute('data-name');
            if((projectName == filterName) || filterName == 'All'){
                project.style.display = 'block';
            }else{
                project.style.display = 'none';
            }
        })

        });
    })

})


// Swiper JS................

let swiper = new Swiper('.mySwiper',{
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600:{
            slidesPerView: 2,
            spaceBetween:10,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:20,
        }
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    }
})

// Nav Scroll................

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-scroll',window.scrollY>0);
})


// Typed JS................

let typed = new Typed('.typed-text',{
    strings: ['Apps Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

// Menu Bar................
let menuBar = document.querySelector('.menu-bar');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('menu-none')
})

// Contact Me -------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyUkJKBFqhMn8WGXyE6wGEApXj0Yc73xFEUWby709aRwFPyaduCetEY9Zm46SveE1jU7w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

