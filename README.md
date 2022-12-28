# NodeJs-ApiRest-Platzy-FakeStoreApi

# Configuration initial del project

// Inicialización de un archivo package.json
npm init -y

// Express es un framework web transigente, escrito en JavaScript y alojado dentro 
// del entorno de ejecución NodeJS.
npm install express

// nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js 
// al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en 
// los archivos del directorio.
npm install --save-dev nodemon

// dotenv es un módulo de dependencia que carga variables de entorno desde un .env 
// archivo a process.env. El almacenamiento de la configuración en el entorno 
// separado del código se basa en la metodología de la aplicación The Twelve-Factor
npm install dotenv --save

// El lenguaje de descripción de esquemas y validador de datos más potente para Js.
npm i joi

// Consumir un api
npm install node-fetch@2
npm install axios

// Estructura de carpetas
controllers ,libs ,middleware ,models ,routes ,schemas ,services

# Configuration package.json scripts
// Ejecutar los diferentes entornos
Configurar los script del package.json
 "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
  }

Ejecutar
npm run dev
npm run start
