login/register
===============
    idioma

dashboard
===============
* nuevo proyecto
-------------------
    cuando borro un punto, cambiar el nombre de los restantes
    conectar logica con disenio2
    croquis
    croquis cotas?
    agregar areas
    scroll de area cuando abro una nueva del acordion
    agregar punto de referencia en el croquis    

* mis informes
----------------
    ordenar por fecha
    filtros todos, pendientes
    search de empresas
    paginacion
    logica
    funcionalidad de los ... para reports (movil)


* mi perfil
------------
    ordenar empresas e instrumentos por nombre cuando creo, o edito
    verificar q en empresas, tengo imagenes como string, y en instrumentos, lo tengo como string[]
    el check para ver si cambian los valores en edit, agregar la comparacion de imagenes
    logica para el perfil2
    colocar boton para crear nueva empresa e instrumento en perfil
    funcionalidad de los ... para perfil empresas e instrumentos (movil)
    no hay pie de pagina en la base de datos
    cuando edito, pero le doy a cancelar, tiene que volver a los datos originales

* planes
----------
    logica de pagos

styles
===============
    hacer cards con foco radial
    bordes psicodelicos
    luz con el mouse en las cards


PDF
====
tengo que refrescar la pagina, para que tome los cambios el pdf
alargar la ventana del pdf
cambiar nombre de archivo a bajar
agregar membretes y logos
contador para cantidad de paginas
anexo de fotos


TODO
======
zustand
uploadThing
polar
PWA
ver los scroll to top, cada que navego
borrar new-report y profile, ya que me quedo con new-report2 y profile2
poner lo de components/disenio2 en components/nuevo-reporte
    borrar perfil, dejar perfil2
    borrar new-report, dejar new-report2
realizar el lazy import que me aconsejo chatgpt para desktop / movil

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


viendo lo de separar los forms, y las actualizaciones de part1Data, ... en los botones siguientes
clima no me toma el CLIMA[0]
funcion clima, para almacenar todo en un string
limitar ancho largo y alto a valores positivos
constantes
menu de incio de movil, mostrar mas protocolos
nuevo reporte, finalizar reporte
4to paso, mostrar resumen, grafico, y generar pdf


mejorar el cargando de part1, por que tarda tanto, si tengo el skelton del part1

