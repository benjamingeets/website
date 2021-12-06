export default ({projet}) =>{
return(
    <a href={projet.url}
    class="transition border p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:border-gray-800 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-900 text-blue-800 dark:text-blue-300 hover:text-indigo-400">
    <h3 class="font-bold">{projet.emoji} {projet.title}</h3>
    <small class="text-xs text-gray-600 dark:text-gray-200">
        {projet.techno.map((t)=>(
            <p>{t}</p>
        ))}
    </small>
</a>
)
}
