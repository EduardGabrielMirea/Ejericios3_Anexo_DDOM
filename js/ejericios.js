document.addEventListener("DOMContentLoaded", function () {
  //Ejercicio 1
  
    var ejercicio1 = document.getElementById("ejericio1");
    var borrarEjercicio1 = document.getElementById("ejericio1_borrar");


    ejercicio1.addEventListener("click", function () {
        var container = document.createElement("div");
        container.id = "container"; // Div que contendrá los párrafos y botones
        document.body.appendChild(container);

        // Crear el primer párrafo
        var parrafo = document.createElement("p");
        parrafo.textContent = "Este es mi primer párrafo";
        container.appendChild(parrafo);

        // Botón para añadir nuevo párrafo
        var btnAnadir = document.createElement("button");
        btnAnadir.textContent = "Añadir nuevo párrafo";
        btnAnadir.id = "anadir";
        container.appendChild(btnAnadir);

        // Acción del botón para añadir un nuevo párrafo
        btnAnadir.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = "Este es un nuevo párrafo añadido";
            container.appendChild(nuevoParrafo);
        });

        // Botón para insertar un nuevo párrafo antes del primer párrafo
        var btnInsertar = document.createElement("button");
        btnInsertar.textContent = "Insertar nuevo párrafo";
        btnInsertar.id = "insertar";
        container.appendChild(btnInsertar);

        // Acción del botón para insertar un nuevo párrafo antes del primer párrafo
        btnInsertar.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = "Este es un párrafo insertado al principio";
            container.insertBefore(nuevoParrafo, container.firstChild);
        });

        // Botón para reemplazar el primer párrafo
        var btnReemplazar = document.createElement("button");
        btnReemplazar.textContent = "Reemplazar párrafo";
        container.appendChild(btnReemplazar);

        // Acción del botón para reemplazar el primer párrafo
        btnReemplazar.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = "Este párrafo reemplaza el primero";
            if (container.firstChild) {
                container.replaceChild(nuevoParrafo, container.firstChild);
            }
        });

        // Botón para borrar el último párrafo
        var btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar párrafo";
        container.appendChild(btnBorrar);

        // Acción del botón para borrar el último párrafo
        btnBorrar.addEventListener("click", function () {
            if (container.lastChild && container.lastChild.tagName === "P") {
                container.removeChild(container.lastChild);
            }
        });

        // Botón para clonar el div completo
        var btnClonar = document.createElement("button");
        btnClonar.textContent = "Clonar div";
        container.appendChild(btnClonar);

        // Acción del botón para clonar el div
        btnClonar.addEventListener("click", function () {
            var clon = container.cloneNode(true); // Clona todo el contenido del div
            document.body.appendChild(clon); // Inserta el clon en el body
        });

       
    });

    borrarEjercicio1.addEventListener("click",function () {
        var btnClear = document.createElement("button");
        btnClear.textContent = "Borrar todo";
        container.appendChild(btnClear);
        btnClear.addEventListener("click", function () {
            document.body.removeChild(container); // Elimina el contenedor del cuerpo
        });
    });

    //Ejericio 2
});
