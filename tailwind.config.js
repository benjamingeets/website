module.exports = {
  darkMode: 'media',
  mode: 'jit',
  purge: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend:{
      maxWidth: {
        '64ch': '64ch',
      }
    }
  }
};
