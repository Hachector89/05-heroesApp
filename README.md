# 04-heroesApp

_Primera aproximación al uso de rutas y rutas hijas, Lazyload, Interfaces y tipado, Angular Material, variables de entorno, local storage, peticiones HTTP, CRUD y Guards._

## Pre-requisitos:

Esta aplicación requiere Angular CLI v12 y Node v16 para su correcta ejecucíón.
Además, mediante el uso de json-server, levantar el servicio 05-heroes-server.

## Ejecución

Con el servidor json de 05-heroes-server levantado, en la consola de comandos, use `ng serve -o` para abrir ejecutar el proyecto y que se abra automáticamente una pestaña `http://localhost:4200/` en el navegador.

# App HeroesApp:

## Módulo Material

Módulo general en el que realizar los exports de todos los componentes de Angular Material utilizados, el cual se incorporará a la sección de la aplicación que necesitemos.

## Servicio Héroes

Contiene servicios GET, POST, PUT y DELETE necesarios para comunicarse con el servidor.

## Interfaz Héroes

Define las interfaces de Héroe y Publisher para falicitar el tipado en las llamadas y respuestas al servidor.

## Componente Confirmar

Ventana de angular material para confirmar si se desea eliminar un Héroe o no.

## Componente Heroe-Tarjeta

Muestra información del Heroe recibido desde un Input.

## Página Agregar

Puede accederse desde el menú "agregar", o al editar un Héroe existente. Si se accede con la intención de editar un Héroe, también da la opción de eliminarlo. 

## Página Buscar

Mediante el uso de un buscador, muestra resultados coincidentes a medida que se escribe en él. 

## Página Heroe

Visualiza toda la información del Héroe.

## Página Home

Menú que muestra las opciones de Listar, Buscar o Agregar Héroes.

## Página Listado

Recibe datos desde el servidor y visualiza a modo de cuadricula todos los Héroes recibidos.