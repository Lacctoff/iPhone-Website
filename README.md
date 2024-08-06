# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Installation of this packages and dependencies for the project

- Install Vite react template
    - npm create vite@latest ./ -- --template react
- Install all dependencies using:
    - npm install
- Install Tailwind Css
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p
- Install GSAP package 
    - npm install gsap @gsap/react
- Install Three.js
    - npm install three @react-three/drei @react-three/fiber
- Install Sentry for errors and performance monitoring
    - npm install --save @sentry/react
    - npx @sentry/wizard@latest -i sourcemaps
