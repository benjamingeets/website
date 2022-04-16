const div = document.querySelector('figure')
const THRESHOLD = 2;
div.addEventListener('mousemove',(e)=>{
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    div.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
})
div.addEventListener('mouseleave',(e)=>{
    div.classList.add("transition")
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
})
div.addEventListener('mouseenter',(e)=>{

    div.classList.remove("transition")
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
})

document.addEventListener('scroll',()=>{
    const header = document.querySelector('header')
    const scroll = document.querySelector('#scroll')
    if(header.getBoundingClientRect().y < -(header.offsetHeight/4)){
        scroll.classList.add('opacity-20')

    }
    else(
        scroll.classList.remove('opacity-20')
    )
})