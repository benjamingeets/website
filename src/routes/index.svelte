<script>
    import Social from "$lib/Social.svelte"
    const title = "Benjamin Geets :: Développeur web (Tournai \ Belgique)"
    const description = "Etudiant en e-Business depuis 2019, je me suis spécialisé dans le développement web à l'aide de frameworks tels VueJS, Svelte,..."
    const url = "https://geets.dev"
    const shareImage = url + "/images/share.jpg"
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

<main class="max-w-5xl mx-auto px-2">
    <div style="background:url('/images/foug.jpg');background-size:cover;background-color:#398B9A;" class="text-white px-8 py-12 rounded-md mt-20">
      <h2 class="lg:text-6xl md:text-5xl text-4xl font-bold">Benjamin Geets</h2>
      <h3 class="mt-6 mb-10 md:text-2xl text-md">Développeur web, Tournai</h3>
        <Social/>
    </div>

    <div class="flex py-14 px-4 md:flex-row flex-col">
      <div class="max-w-xs mx-auto">
        <img class="rounded-md" src="/images/benjamingeets.webp" alt="Benjamin Geets" title="Benjamin Geets">
      </div>
      <div class="md:w-9/12 w-12/12 lg:leading-10 leading-8 md:pl-10 pl-0 md:pt-0 pt-10 flex items-center lg:text-xl text-lg ">
        <p>
            Etudiant en dernière année à la <b>HEPH Condorcet</b> en section e-Business, j'ai toujours été passionné par l'informatique. J'ai commencé à bidouiller <b>dès que j'ai eu un ordinateur entre les mains</b>. Aujourd'hui, je me suis beaucoup <b>formé à travers différents cours en ligne</b> et développe principalement en JavaScript avec React, Vue, Svelte,... et je commence à me former au backend avec <b>Node.js</b> et <b>Python</b>.
        </p>
      </div>
    </div>
  </main>