<script>
    import ExternalLink from '$lib/icons/ExternalLink.svelte';
    import IconDisplay from '$lib/icons/IconDisplay.svelte'
    const title = "Benjamin Geets :: Développeur web (Tournai \ Belgique)"
    const description = "Développeur web frontend: Jamstack, SvelteKit, Node.js, ..."
    const url = "https://geets.dev"
    const shareImage = url + "/images/share.jpg"
    let links = [
        {text:"Github",href:"https://github.com/benjamingeets"},
        {text:"LinkedIn",href:"https://linkedin.com/in/benjamingeets"},
        {text:"Portfolio",href:"https://portfolio.geets.dev"},
        {text:"Contact",href:"mailto:benjamin@geets.dev"},
    ]
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content="{title}">
    <meta name="description" content="{description}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="{shareImage}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{url}">
    <meta property="twitter:title" content="{title}">
    <meta property="twitter:description" content="{description}">
    <meta property="twitter:image" content="{shareImage}">

</svelte:head>


<div class="min-h-screen w-screen dark:bg-gray-900 dark:text-gray-100">
    <main class="max-w-3xl mx-auto min-h-screen flex items-center sm:p-4">
        <div class="w-full bg-gray-200 dark:bg-gray-800 p-8 sm:rounded-lg sm:min-h-0 min-h-screen flex md:flex-row flex-col md:justify-between">
            <div class="flex flex-col md:w-9/12 w-12/12">
                <h1 class="md:text-5xl text-3xl font-bold">Benjamin Geets 🍃</h1>
                <h2 class="font-bold md:text-2xl text-lg my-2">Développeur web</h2>
                <p>#SvelteKit #Nodejs #Tailwind #Jamstack <small>#Vue #React</small> </p>
                
            </div>
            <hr class="md:hidden block my-4 h-1">
            <ul class="md:w-2/12 w-12/12 flex md:flex-col flex-row md:justify-center flex-wrap">
                {#each links as link}
                    <li class="mr-2 mt-2 flex">
                        <a rel="noopener" target="_blank" class="link font-bold text-gray-600 dark:text-gray-300 hover:text-green-600 flex transition" href="{link.href}"><IconDisplay name="{link.text}"/> <span class="mx-2">{link.text}</span> <span id="outside"><ExternalLink/></span> </a>
                    </li>
                {/each}
            </ul>
        </div>
    </main>
</div>

<style>
    .link #outside{
        display: none;
    }
    .link:hover #outside{
        display: block;
    }
</style>