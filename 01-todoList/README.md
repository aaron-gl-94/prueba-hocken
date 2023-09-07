# 1TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Run JSON-server

Please, first run json-server: `json-server --watch src/db/db.json`. Navigate to `'http://localhost:3000'`. The json-server works as fake-api.
Check path: `src/db/db.json`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Descripción

- Crear una aplicación que permita mantener una lista de tareas.
- La pantalla principal deberá contener la lista de tareas y un boton que permita agregar nuevas tareas;
- Cada entrada de la lista debera tener el nombre de la tarea, el estado de la tarea (Completado o pendiente) representado por un checkbox y un boton que permita borrar la tarea.
- Al darle click al boton de "agregar tarea" debera aparecer un componente que solicite el nombre de la tarea y que guarde la tarea.
- Se debe persistir el estado de las tareas, cada vez que: se agregue una nueva tarea, que se cambie el estado de una tarea o se borre una tarea, aunque se cierre la aplicacion.

### Debe contemplarse lo siguiente:
- El acceso protegido por usuario y contraseña asegurando todo lo que sea necesario
- Maneje dos roles de acceso (puede borrar y no puede borrar)
- Navegación reflejada en la url
- Historial de navegación
- Persistencia de datos