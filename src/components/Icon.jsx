export default ({ name, size = 25 }) => {
    switch (name) {
        case 'Github':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            )
        case 'LinkedIn':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
            )
        case 'Contact':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
            )
        case 'Portfolio':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
                    <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
                </svg>
            )
        case 'External':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current md:block hidden text-gray-600 dark:text-gray-300" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                </svg>
            )
        case 'Arrow-back':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current" width={size} height={size} viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="11 7 6 12 11 17" />
                    <polyline points="17 7 12 12 17 17" />
                </svg>
            )
        case 'Blog':
            return(
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="none"
                stroke="#2c3e50"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="stroke-current"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M13 20L20 13"></path>
                <path d="M13 20v-6a1 1 0 011-1h6V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h7"></path>
              </svg>
            )
        default:
            return (
                <p>no</p>
            )
            break;
    }
}