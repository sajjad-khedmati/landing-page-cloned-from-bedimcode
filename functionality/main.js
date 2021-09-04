const navToggle = document.querySelector('.nav__toggle'),
      navMenu = document.querySelector('.nav__menu'),
      navClose = document.querySelector('.nav__close');


const showNav = ()=>{
navMenu.style.top = '0'
}

const hideNav = ()=>{
    navMenu.style.top = '-1000%'
}

// show nav when click the function icon
navToggle.addEventListener("click" , () => {
    showNav();
})

// hide nav when click the close icon
navClose.addEventListener("click" , () => {
    hideNav();
})

// close nav when ckick items
const navList = document.querySelectorAll('.nav__link');
navList.forEach(element => {
    element.addEventListener("click" , hideNav)
});


// Change the header color when scroll the screen 

const header = document.querySelector('.header');

window.addEventListener('scroll' , ()=>{
    if (this.scrollY >= 90) {
        header.style.backgroundColor = ' hsl(var(--hue-color), 4%, 6%)'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})


//Active the nav item when scrolling 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 180;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// ANIMATIONS
// use scrollreveal

const scrollAnimation = ScrollReveal( {
    distance : '70px' , 
    duration: 2500 , 
    delay: 300
} )

// Home Section Animations
scrollAnimation.reveal('.home__img');
scrollAnimation.reveal('.home__title-section' , {origin: 'top' });
scrollAnimation.reveal('.overview , .home__button');
scrollAnimation.reveal('.home__sponser' , { origin: 'left'});


// Specs Section Animations
scrollAnimation.reveal('.section__title' , { origin: 'top'});
scrollAnimation.reveal('.specs__options' , { origin: 'left'});
scrollAnimation.reveal('.specs__image' , { origin: 'right'});


// Case Section Animations
scrollAnimation.reveal('.case__image' , { origin: 'left'});
scrollAnimation.reveal('.case__content' , { origin: 'right'});
scrollAnimation.reveal('.case__card' , { delay: 800 , origin: 'bottom' });


// Products Section Animations
scrollAnimation.reveal('.product__item' , { origin: 'bottom'});


// Footer Section Animations
scrollAnimation.reveal('.footer , .footer__copyright' , { origin: 'top'});


