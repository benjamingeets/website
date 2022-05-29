


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
                <p class="text-green-500">J'ai bien <b>reçu votre message</b>, je vous répondrai dans les plus brefs délais.</p>
           
            `
        })
        .catch((error) => alert(error));


})