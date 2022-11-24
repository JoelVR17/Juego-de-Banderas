// ? Cargo en un arreglo las imagenes de las banderas. El orden en que se muestran
let banderas = ["pa.svg","bo.svg","ad.svg","gb.svg","na.svg"];

// ? Arreglo que guardara la opcion correcta
let correctas = [2,2,1,1,0];

// ? Arreglo con paises que muestra 
let opciones = [];

// ? Se cargan las opciones a mostrar
opciones.push(["Sudafrica","Singapur","Panama"]);
opciones.push(["Peru","Italia","Bolivia"]);
opciones.push(["Tunez","Andorra","Antigua Y Barbuda"]);
opciones.push(["Ucrania","Reino Unido","Madagascar"]);
opciones.push(["Namibia","Oman","Etiopia"]);

// ? Variable que guarda la posicion actual
let posActual = 0;

// ? Variable que guarda la cantidad de acertadas
let cantidadAcertadas = 0;

// ? Le da click en iniciar juego
function comenzarJuego () {
    
    // ? Reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;

    //? Activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

// ? Funcion que carga la bandera
function cargarBandera () {
    
    // ? Controlo si se acabaron las banderas
    if (banderas.length <= posActual) {
        terminarJuego();

    // ? cargo las opciones
    } else {
        // ? limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

// ? Funcion para limpiar opciones
function limpiarOpciones () {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

// ? Funcion que comprueba la respuesta elegida
function comprobarRespuesta (opElegida) {

    // ? Si acerto
    if (opElegida == correctas[posActual]) {

        // ? Se ponen las clases con acertado
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    
    // ? No acerto
    } else {
        // ? Se ponen las clases con no acertado
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        
        // ? Opcion que era correcta
        document.getElementById("n" + correctas[posActual]).className = "nombre nombreAcertada"
        // ? Opcion que era correcta
        document.getElementById("l" + correctas[posActual]).className = "letra letraAcertada"
    }
    posActual ++;

    // ? Esperamos 1 segundo y mostramos la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}

// ? Funcion que termina el juego
function terminarJuego () {
    // ? Ocultamos las pantallas y mostramos la final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    // ? Agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

// ? Funcion para regresar al inicio
function volverAlInicio () {

    // ? Ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}