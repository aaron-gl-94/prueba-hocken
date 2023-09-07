# 1TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Application Test

- Crear una aplicación que permita mantener una lista de tareas.
- La pantalla principal deberá contener la lista de tareas y un boton que permita agregar nuevas tareas;
- Cada entrada de la lista debera tener el nombre de la tarea, el estado de la tarea (Completado o pendiente) representado por un checkbox y un boton que permita borrar la tarea.
- Al darle click al boton de "agregar tarea" debera aparecer un componente que solicite el nombre de la tarea y que guarde la tarea.
- Se debe persistir el estado de las tareas, cada vez que: se agregue una nueva tarea, que se cambie el estado de una tarea o se borre una tarea, aunque se cierre la aplicacion.

Debe contemplarse lo siguiente:
- El acceso protegido por usuario y contraseña asegurando todo lo que sea necesario
- Maneje dos roles de acceso (puede borrar y no puede borrar)
- Navegación reflejada en la url
- Historial de navegación
- Persistencia de datos