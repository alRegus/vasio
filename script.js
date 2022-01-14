const aboutElem = document.querySelector('.about');
const firmElem = document.querySelector('.info-firm');
const upProd = document.querySelectorAll('.product-one, .product-two, .product-three');
const downProd = document.querySelectorAll('.product-four, .product-five, .product-six');
const lefProd = document.querySelectorAll('.product-one, .product-three, .product-five');
const rightProd = document.querySelectorAll('.product-two, .product-four, .product-six');
const check = document.querySelector('.hamburger > input');
const nav = document.querySelector('nav');

const leftProdArr = Array.from(lefProd);
const rightProdArr = Array.from(rightProd);
const upProdArr = Array.from(upProd);
const downProdArr = Array.from(downProd);



/* Scroll animations */
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100 && window.scrollY <= 800) {
        aboutElem.classList.add('slideInRight')
        firmElem.classList.add('slideInLeft')

    }
    if (window.scrollY >= 600 && window.scrollY <= 1285 && innerWidth > 1190) {
        upProdArr.map(prod => {
            prod.classList.add('slideInUpProduct')
        })
        downProdArr.map(prod => {
            prod.classList.add('slideInDownProduct')
        })
    }

    if (window.scrollY >= 600 && window.scrollY <= 1285 && innerWidth <= 1190) {
        leftProdArr.map(prod => {
            prod.classList.add('prod-left-slide-in')
        })
        rightProdArr.map(prod => {
            prod.classList.add('prod-right-slide-in')
        })

    }
})

/* Hamburger menu slide in and out */
function slide(check) {
    if (check.checked) {
        nav.classList.add('nav-slide-in');
    } else {
        nav.classList.add('nav-slide-out');
        nav.classList.remove('nav-slide-in');
        nav.addEventListener('transitionend', () => {
            nav.classList.remove('nav-slide-out');
        })
    }
}

/* Slider */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//Modal window logic
function modal(n) {
    const image = n.children[0].getAttribute('src')
    const modalImg = document.createElement('img')
    modalImg.setAttribute('src', `${image}`)

    const text = n.children[1].innerText
    const modalText = document.createElement('p')
    modalText.innerText = text

    const close = document.createElement('span')
    close.innerHTML = '<i class="fas fa-window-close">'
    close.addEventListener('click', () => {
        modalContent.parentNode.style.display = "none"
        modalContent.innerHTML = ""
    })

    const modalContent = document.querySelector('.modal-content')
    modalContent.appendChild(modalImg)
    modalContent.appendChild(modalText)
    modalContent.appendChild(close)

    modalContent.parentNode.style.display = "block"
}

function closeOnSide(modal) {
    if (window.innerWidth > 835) {
        modal.parentNode.style.display = "none"
        document.querySelector('.modal-content').innerHTML = ""
    }
}

