# Meme Finder Site 🌐
![Pipeline](https://git.averyan.ru/meme-finder/site/badges/main/pipeline.svg)
![License](https://img.shields.io/github/license/meme-finder/site)

Frontend for Meme Finder written in Svelte

### Configuration (env variables at build time):
```bash
VITE_API_BASE=https://memefinder.ru/api # base api url
VITE_MATOMO_ENABLED=true # matomo analytics switch
VITE_MATOMO_URL=https://matomo.averyan.ru # matomo url
VITE_MATOMO_SITEID=1 # matomo site id
```

### Pages:
  - [https://memefinder.ru/](https://memefinder.ru/) - search
  - [https://memefinder.ru/create](https://memefinder.ru/create) - create meme
  - [https://memefinder.ru/{uuid}](https://memefinder.ru/d5c013b2-2761-42e9-9017-4d867bfb9782) - per meme page

### Related projects:
  - [Svelte](https://svelte.dev/) 🌐 - fast web framework
  - [Matomo](https://matomo.org/) 📈 - open source analytics
