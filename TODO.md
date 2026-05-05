login/register
===============
    idioma

dashboard
===============
* nuevo proyecto
-------------------
    agregar punto de referencia en el croquis
    verificar si hay empresas, instrumentos y tecnico cargados
    verificar si hay reporte en curso
    funcion clima, para almacenar todo en un string
    limitar ancho largo y alto a valores positivos
    nuevo reporte, finalizar reporte

* mis informes
----------------
    ordenar por fecha
    filtros todos, pendientes
    search de empresas
    paginacion
    logica de menu para cada informe

* mi perfil
------------
    no hay pie de pagina en la base de datos

* planes
----------
    logica de pagos

styles
===============
    hacer cards bordes en esquinas alternas
    animaciones de border, de svg, de scroll fade in


PDF
====
cambiar nombre de archivo a bajar
agregar membretes y logos
anexo de fotos
arreglar cuando la tabla es muy extensa y pasa a otra pagina

TODO
======
zustand
uploadThing
polar
PWA

EL INSTALL PARA NETLIFY
los pasos que empece a realizar. 
instale el @netlify/vite-plugin-tanstack-start 
luego la consola me dijo que corra: npx netlify init (NO HACERLO)
luego me fue pidiendo autorizaciones en consola y en netlify 
Create & configure a new project 
me pidio el nombre del sitio: enhysa 
me dijo que creo el projectoen : https://enhysa.netlify.app 
? Your build command (hugo build/yarn run build/etc): vite build 
? Directory to deploy (blank for current dir): dist\client 
Success! Netlify CI/CD Configured! 
git push Push to your git repository to trigger new project builds netlify open Open the Netlify admin URL of your project git push luego cambie el deploy settings de netlify a: Build command = npm run build 
Publish directory =Not set 
Functions directory = netlify/functions 
el package.json build a : "build": "vite build" 
y este netlify.toml 
[build] command = "npm run 
build" publish = "dist/client" 
y este vite.config: 
export default defineConfig({ base: "/", build: { outDir: "dist", }, 
plugins: [ devtools(), viteTsConfigPaths({ projects: ["./tsconfig.json"], }), tailwindcss(), tanstackStart(), netlify(), viteReact(), ], })

FOLDERS
========
perfil
perfil/tecnico
perfil/empresas
perfil/instrumentos

nuevo-proyecto/id
nuevo-proyecto/area?id=
nuevo-proyecto/resumen


guardar par1Data, part2Data, part3Data en localstorage sirve?


nueva version:
=============
voy a cambiar movil first
restructuracion de carpetas
restructuracion de tablas
