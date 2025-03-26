# Proyecto_Pok-dex

Una aplicación web interactiva de Pokédex construida con React, TypeScript y GraphQL que le permite explorar y descubrir información sobre diversos pokemones.

# Caracteristicas
-Listado completo de Pokémon con paginación.
-Búsqueda avanzada por nombre y tipo.
-Detalles completos de cada Pokémon como Estadísticas, tipos, altura y peso.
-Diseño respondive 
-Interfaz atractiva con fondos temáticos.
-Sistema de carga con animación de Pokémon.

# Tecnologias usadas

-FRONTEND: React, TypeScript, Vite.
-ESTADO Y API: Apollo y GraphQL.
-ESTILO: css

# Instalación

-Clonar el repositorio de GitHub: git clone https://github.com/tu-usuario/pokemon-app.git
- En la terminal instalar las dependencias: npm install

# Uso

En la terminal
-Primero escribir cd pokemon-app
-Segundo escribir npm run dev


# Autores
Los cosmicos











# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
