<script>
    import Mail from "./icons/Mail.svelte"
    import GitHub from "./icons/GitHub.svelte"
    import LinkedIn from "./icons/LinkedIn.svelte"
    const liStyle = "md:mx-2 mx-1"
    const iconStyle = "transform hover:rotate-45 duration-300 cursor-pointer"
    const color = "#fff"
    const size = "45"
</script>

<div class="flex mt-4 justify">
    <ul class="flex flex-wrap">
        <li class="{liStyle}" title="Contact"><a target="_blank" href="mailto:benjamin@geets.dev"><Mail className="{iconStyle}" size="{size}" color="{color}"/></a></li>
        <li class="{liStyle}" title="Github"><a href="http://github.com/benjamingeets" target="_blank"><GitHub className="{iconStyle}" size="{size}" color="{color}"/></a></li>
        <li class="{liStyle}" title="Linkedin"><a href="http://linkedin.com/in/benjamingeets" target="_blank"><LinkedIn className="{iconStyle}" size="{size}" color="{color}"/></a></li> 
         <li class="{liStyle} text-white text-3xl flex justify-center items-center hover:text-green-600 hover:border-green-600 duration-300 border-2 rounded-md px-2" ><a target="_blank" href="https://portfolio.geets.dev">Portfolio</a></li>
    </ul>
</div>