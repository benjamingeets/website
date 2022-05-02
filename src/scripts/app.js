
import { animate, stagger } from "motion"

animate(
    ".hero-item-motion",
    {
        y: [-10, 0],
        opacity: [0, 1]
    },
    {
        delay: stagger(0.2),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
    }
)

animate(
    ".links-motion li",
    {
        y: [10, 0],
        opacity: [0, 1]
    },
    {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
    }
)

document.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    const scroll = document.querySelector('#scroll')
    if (header.getBoundingClientRect().y < -(header.offsetHeight / 4)) {
        scroll.classList.add('opacity-20')

    } else(
        scroll.classList.remove('opacity-20')
    )
    
})


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(form);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
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
        })
        .catch((error) => alert(error));


})