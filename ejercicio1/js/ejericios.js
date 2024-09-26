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
        var texto = document.createTextNode("Este es el primer párrafo");
        parrafo.appendChild(texto);
        container.appendChild(parrafo);

        // Botón para añadir nuevo párrafo
        var btnAnadir = document.createElement("button");
        btnAnadir.id = "anadir";
        var textoBtnAnadir = document.createTextNode("Añadir párrafo");
        btnAnadir.appendChild(textoBtnAnadir);
        container.appendChild(btnAnadir);

        // Acción del botón para añadir un nuevo párrafo
        btnAnadir.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            var textoNuevoParrafo = document.createTextNode("Este es un nuevo párrafo añadido")
            nuevoParrafo.appendChild(textoNuevoParrafo);
            container.appendChild(nuevoParrafo);
        });

        // Botón para insertar un nuevo párrafo antes del primer párrafo
        var btnInsertar = document.createElement("button");
        var  textoBtnInsertar = document.createTextNode("Insertar párrafo antes del primero");
        btnInsertar.id = "insertar";
        btnInsertar.appendChild(textoBtnInsertar);
        container.appendChild(btnInsertar);

        // Acción del botón para insertar un nuevo párrafo antes del primer párrafo
        btnInsertar.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            var textoNuevoParrafo  = document.createTextNode("Este es un nuevo párrafo insertado antes del primero");
            nuevoParrafo.appendChild(textoNuevoParrafo);
            container.insertBefore(nuevoParrafo, container.firstChild);
        });

        // Botón para reemplazar el primer párrafo
        var btnReemplazar = document.createElement("button");
        var textoBtnReemplazar = document.createTextNode("Reemplazar el primer párrafo");
        btnReemplazar.appendChild(textoBtnReemplazar);
        container.appendChild(btnReemplazar);

        // Acción del botón para reemplazar el primer párrafo
        btnReemplazar.addEventListener("click", function () {
            var nuevoParrafo = document.createElement("p");
            var textoNuevoParrafo =  document.createTextNode("Este es el nuevo párrafo que reemplaza al primero");
            nuevoParrafo.appendChild(textoNuevoParrafo);
            if (container.firstChild) {
                container.replaceChild(nuevoParrafo, container.firstChild);
            }
        });

        // Botón para borrar el último párrafo
        var btnBorrar = document.createElement("button");
        var textoBtnBorrar = document.createTextNode("Borrar el último párrafo");
        btnBorrar.appendChild(textoBtnBorrar);
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
