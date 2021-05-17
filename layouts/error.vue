<template>
    <div class="flex flex-col justify-center items-center">
        <p class="text-3xl font-bold">🍃 Oups. Cette page n'existe pas.</p>
        <GreenButton class="mt-20 " @click.native='$router.push("/")'>Retour a l'accueil</GreenButton>
    </div>
</template>

<style scoped>
div{
    min-height: 70vh;
}
</style>