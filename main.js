var contenedor = document.getElementById("contenedor-resultado");
var resultado = document.getElementById("resultado");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var botonEncriptar = document.getElementById("boton-encriptar");
var texto = document.getElementById("texto").value;
var botonCopiar = document.getElementById("btn-copiar");
var mensaje = document.querySelector(".mensaje");
var letras = ["a", "e", "i", "o", "u"];


contenedor.classList.add("ocultar");
document.getElementById("texto").value = " ";

// Funcion que nos permitira ocultar el contenido que carga con la pagina
function noMostrar(){
    document.getElementById("mensaje_parrafo").style.visibility = "hidden";
    document.getElementById("h3").style.visibility = "hidden";
    document.getElementById("imagen").style.visibility = "hidden";
}

// Enciptando el texto ingresado
function encriptarTexto(){
    var textoEncriptar = document.getElementById("texto").value.toLowerCase();
    
    if(textoEncriptar === " "){
        alert("Escriba algo, recuerde que solo minusculas y sin acentos");
        
    }else{  
        noMostrar();
        contenedor.classList.remove("ocultar"); //Quitamos la clase ocultar de los elementos a mostrar
        contenedor.classList.add("resultado"); //Agregamos la clase para poder darle estilo a los elementos
        mensaje.classList.add("ocultar"); //Le colocamos la clase ocultar a los elementos que cargan con la pagina

        var textoEncriptado = textoEncriptar.replace(/e/igm, "enter"); //i(mayuculas y menusculas), g(para toda la linea), m(multiples lineas)
        textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
        textoEncriptado = textoEncriptado.replace(/i/igm, "ims");
        textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
        textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

        resultado.innerHTML = textoEncriptado; 
    }
}

//Desencriptando, en esta funcion veremos otra forma de reemplazar caracteres
function desencriptarTexto (){
    var textoEncriptar = document.getElementById("texto").value.toLowerCase();

    if(textoEncriptar === " "){
        alert("Escriba algo, recuerde que solo minusculas y sin acentos");
        
    }else{ 
        noMostrar();
        contenedor.classList.remove("ocultar"); //Quitamos la clase ocultar de los elementos a mostrar
        contenedor.classList.add("resultado"); //Agregamos la clase para poder darle estilo a los elementos
        mensaje.classList.add("ocultar"); //Le colocamos la clase ocultar a los elementos que cargan con la pagina

        var textoDesencriptado = textoEncriptar.replace(/enter/igm, "e"); //i(mayuculas y menusculas), g(para toda la linea), m(multiples lineas)
        textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
        textoDesencriptado = textoDesencriptado.replace(/ims/igm, "i");
        textoDesencriptado = textoDesencriptado.replace(/ai/igm, "a");
        textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");

        resultado.innerHTML = textoDesencriptado;
    }
}

function copiar(){
    let texto = document.getElementById("resultado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // texto.value = " ";
}

botonCopiar.onclick = copiar;
botonDesencriptar.onclick = desencriptarTexto;
botonEncriptar.onclick = encriptarTexto;