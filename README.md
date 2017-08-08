# Page-login-with-vuejs-google

## Descripción
Ejercicio de creación de una pagina de `login` con Vuejs y OAuth via Google.
- - -
## Build Setup

``` bash

# Instalar vuejs-cli
npm install -g vue-cli

# Crear proyecto

vue init webpack my-project

# Ingresar al proyecto
cd my-project

# Instalar dependencias
npm install

# Ejecutar proyecto base
npm run dev

# Construir versión producción
npm run build

# Correr pruebas unitarias
npm run unit

# Correr pruebas e2e
npm run e2e

# Correr todas las pruebas
npm test
```

## Docker

* Borrado de contenedores 
```
docker ps -a | egrep Exited | cut -d ' ' -f 1|xargs docker rm
```

* Borrar imagenes < none >

```
docker images | egrep none | cut -c 41-53| xargs docker rmi
```