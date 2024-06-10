# Armen ineen
- [Armen ineen](#armen-ineen)
  - [Get started](#get-started)
  - [Docker](#docker)
  - [Environment variables](#environment-variables)
  - [Architecture](#architecture)
  - [Libraries / dependencies](#libraries--dependencies)


## Get started

Clone the repo locally

```sh
git clone https://gitlab.com/unravel-works/armen-in-een/frontend.git
```

Enter the repo and in the shell type:

```sh
yarn install
```

To start the app server (default port 3000) 
```sh
yarn start
```

To start storybook (default port 6006) 
```sh
yarn storybook
```
## Docker

> Important!
> 
> Make sure that you filled out the .env file before building -> running


```sh
# Start normally
docker-compose -f docker-compose.dev.yml up

# Build clean for development
docker-compose -f docker-compose.dev.yml up --build

# Build for production
docker build -f Dockerfile -t armen_ineen:prod .

# Run production (uses Nginx in container)
docker run -p 80:80 armen_ineen:prod
```

## Environment variables

.env.example files contains the possible environment variables

```sh
REACT_APP_API_BASE_URL=https://www.example.com/api/v1

REACT_APP_HCAPTCHA_ACTIVE=true
REACT_APP_HCAPTCHA_SITEKEY=your_key
REACT_APP_HCAPTCHA_SECRET=your_key
```

## Architecture

```js

// contain business data
/src/data/...
/src/data/locales                     // language files for static text
/src/data/instances                   // people/organisation information

// language config
/src/i18n.ts

// Assets 
/src/assets                           // optimized during build
/public                               // served during runtime

// CSS (MUI)
/src/index.css                        // default, should not be used for application styling
/src/global_styles.json
/src/GlobalStyles.tsx                 // this can now be imported and used with MUI's'useTheme()'

// state management (RTK)
/src/redux            

// router (react-router)
/src/components/composite/NavBar

// general helpers for application code
/src/helpers                         

// pages
/src/pages
/src/pages/index.tsx             
/src/pages/Pages.tsx
/src/pages/routes.ts

// example page
/src/pages/homepage/..
/src/pages/homepage/index.tsx

// example sections
/src/sections/homepage/Section1       // sections go into each page 

// component splitting
/src/components/**/                   // globally shared components 
/src/components/base/..       
/src/components/composite/.. 
etc..

// component folder
/src/components/**/index.tsx                      
/src/components/**/interfaces.ts        
etc..    


```

## Libraries / dependencies

---

code/libraries:
- react / typescript
- MUI (css)
- redux toolkit
- react-router
- react-i18next (language)
- jest (testing)
- storybook
- https://www.npmjs.com/package/react-alice-carousel 
- https://www.npmjs.com/package/@hcaptcha/react-hcaptcha

maps element:
- https://react-leaflet.js.org/
- http://npmjs.com/package/@types/react-leaflet

---