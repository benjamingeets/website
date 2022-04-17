const div = document.querySelector('figure')
const THRESHOLD = 2;
div.addEventListener('mousemove', (e) => {
    const {
        clientX,
        clientY,
        currentTarget
    } = e;
    const {
        clientWidth,
        clientHeight,
        offsetLeft,
        offsetTop
    } = currentTarget;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    div.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
})
div.addEventListener('mouseleave', (e) => {
    div.classList.add("transition")
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
})
div.addEventListener('mouseenter', (e) => {

    div.classList.remove("transition")
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
})

const sections = {
    whoami: document.querySelector('#whoami'),
    portfolio: document.querySelector('#portfolio'),
    contact: document.querySelector('#contact')
}
const nav = document.querySelector('nav')


document.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    const scroll = document.querySelector('#scroll')
    if (header.getBoundingClientRect().y < -(header.offsetHeight / 4)) {
        scroll.classList.add('opacity-20')

    } else(
        scroll.classList.remove('opacity-20')
    )
    
    isInViewPort("#whoami")
    isInViewPort("#portfolio")
    isInViewPort("#contact")
})

function isInViewPort(name) {
    const color = "lg:bg-gray-200"
    const elt = document.querySelector(name)
    const navItem = nav.querySelector('a[href="' + name + '"]')
    const navigation = nav.querySelectorAll('a')
    var bounding = elt.getBoundingClientRect();

    if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        navigation.forEach(test=>{
            if(test.classList.contains(color)){
                test.classList.remove(color)
            }
        })
        navItem.classList.add(color)
    } 
    
}


const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    form.innerHTML = `
    <div class="flex items-center justify-center lg:mt-10">
        <svg stroke="#16A34B" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2l4 -4" />
        </svg>
        <p>J'ai bien <b>reçu votre message</b>, je vous répondrai dans les plus brefs délais.</p>
    </div>
    `
    let formData = new FormData(form);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    console.log(formData)
})