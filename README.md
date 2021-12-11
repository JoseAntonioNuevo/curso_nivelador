Esta Api permite al usuario que se muestre el mensaje que se desee a través de una petición Get o Post junto a la variable msg.
Se recomienda utilizar postman para relalizar las peticiones y visualizar el resultado final.

Para poder ejecutar el programa hay que seguir los siguientes pasos:

    - Comprobar que cowsay y express está instalado, si no ostá instalarlas junto a node.js.
    - Abrir una terminal en la ubicación del archivo app.js.
    - Arrancar la api en una terminal con el comando node app.js.
    - Hacer una petición GET o POST a http://localhost:8080?msg="TU MENSAJE"
    - Al hacer la petición a través de postman podremos visualizar el mensaje que queramos junto a cowsay de la variable msg a elección del usuario.



SOLUCIÓN DOCKERIZADA

Se ha dockerizado la solución, gracias a ello se han añadido los archivos necesarios para poder dockerizar la solución tales como un Dockerfile y un package.json.

Para dockerizar el código se ha de ejecutar los siguientes comandos en una terminal dentro de la carpeta donde se encuentran todos los archivos de la solución:

curso_nivelador % docker build -t username/curso-nivelador .   
curso_nivelador % docker run -p 8080:8080 username/curso-nivelador 

Una vez ejecutados estos comandos dispondremos de la solución dockerizada y en ejecución en el puerto 8080.
