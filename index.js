
//Funcion para enncriptar texto: esta funcion localiza las vocales y las reemplaza por siguiente llave de encriptacion:
//La letra “e” se convierte en “enter”
//- La letra “i” se convierte en “imes”
//- La letra “a” se convierte en “ai”
//- La letra “o” se convierte en “ober”
//- La letra “u” se convierte en “ufat”
function encriptar(){
    let mensaje = document.getElementById("texto").value;
                
    let tituloMensaje = document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo-mensaje");
    let muñeco = document.getElementById("muñeco");
    
    mensaje=mensaje.toLowerCase()
    
    const regex = /[^\w\s]|_/g; //revisa si hay caracteres especiales
    if (regex.test(mensaje)) {
        swal.fire({ icon: 'error',
                    title: 'Oops...',
                    text:"El texto contiene caracteres especiales"});
        
    }
    else{
        let nuevoMensaje = "";
        for(let i = 0; i < mensaje.length; i++){
            if(mensaje[i] == "a"){
                nuevoMensaje += "ai"
            }
                
            else if(mensaje[i] == "e"){
                nuevoMensaje += "enter"
            }

            else if(mensaje[i] == "i"){
                nuevoMensaje += "imes"
            }
                
            else if(mensaje[i] == "o"){
                nuevoMensaje += "ober"
            }

            else if(mensaje[i] == "u"){
                nuevoMensaje += "ufat"
            }

            else {
                nuevoMensaje += mensaje[i]
            }
        }
            console.log(nuevoMensaje)
            
        if (mensaje.length != 0){   
            muñeco.style.display="none";                 
            console.log(nuevoMensaje); 
            cifrado.value = nuevoMensaje;
            tituloMensaje.textContent = "¡¡ Texto encriptado con éxito !!";
            parrafo.textContent = "";
            
                        
        } else {            //Revisa si la casilla de texto esta vacia
             swal.fire({ icon:  "warning",
                         title: 'Oops...',
                         text: "Debes ingresar un texto!!"}) ;
        }
    }
        
}

//Funcion desencriptar, por ejemplo para la letra "a", el programa primero busca la letra "a" dentro del texto y luego revisa
//si la siguiente letra es "i" si ambas coinciden entonces el programa reemplaza "ai" por una "a"
function desencriptar() {
    let text = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo-mensaje");
    let muñeco = document.getElementById("muñeco");
    
    const regex = /[^\w\s]|_/g;    // Revisa si hay caracteres especiales
    if (regex.test(text)) {
        swal.fire({ icon: 'error',
                    title: 'Oops...',
                    text:"El texto contiene caracteres especiales"});
        
    }

    else {
        let result = "";
        let i = 0;
        while(i < text.length){
        
            if (text[i] === "a" && text[i + 1] === "i") {
                result += "a";
                i += 2; 
            }
                
            else if(text[i] == "e" && text[i + 1] == "n" && text[i + 2] == "t" && text[i + 3] == "e" && text[i + 4] == "r"){
                result += "e";
                i += 5;
            }

            else if(text[i] == "i" && text[i + 1] == "m" && text[i + 2] == "e" && text[i + 3] == "s"){
                result += "i";
                i += 4; 
            }

            else if(text[i] == "o" && text[i + 1] == "b" && text[i + 2] == "e" && text[i + 3] == "r"){
                result += "o";
                i += 4;
            }

            else if(text[i] == "u" && text[i + 1] == "f" && text[i + 2] == "a" && text[i + 3] == "t"){
                result += "u";
                i += 4; 
            }
            
            else {
                result += text[i];
                i++
            }

        }

        if (text.length != 0) {
            cifrado.value = result;
            muñeco.style.display="none";
            tituloMensaje.textContent = "!! Texto desencriptado con éxito ¡¡";
            parrafo.textContent = "";
                    
        } else {    //Revisa que la casilla de texto no este vacia
                swal.fire({  icon: "warning",
                            title: "Ooops!",
                            text: "Debes ingresar un texto" });
        }
    }
}

   
//Funcion para copiar texto con los iconos        
let textarea = document.getElementById('cifrado');
let copyIcon2 = document.getElementById('copyIcon2');

copyIcon2.onclick=function() {
    cifrado.select();
    document.execCommand("copy");
   alert("Texto copiado")
}

let textarea2 = document.getElementById('texto');
let copyIcon1 = document.getElementById('copyIcon1');

copyIcon1.onclick=function() {
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado")
}



//Cambiar texto
function swapContent() {
    var inputTextarea = document.getElementById("texto");
    var resultTextarea = document.getElementById("cifrado");
    var tituloE = document.getElementById("titulo-mensaje");
    var parrafoE = document.getElementById("parrafo-mensaje");

    
    var inputText = inputTextarea.value;
    var resultText = resultTextarea.value;
  
    // Mueve el contenido de la ventana salida a la ventana de entrada
    inputTextarea.value = resultText;
      
    // Limpia ventana de resultado y mensajes
    resultTextarea.value = "";
    tituloE.innerText = "";
    parrafoE.innerText = "";

}
  
//Funciobn Borrar. restablece toda la interfaz a condiciones iniciales
function inicio() {
    var inputTextarea = document.getElementById("texto");
    var outputTextarea = document.getElementById("cifrado");
    var tituloE = document.getElementById("titulo-mensaje");
    var parrafoE = document.getElementById("parrafo-mensaje");
    let muñeco = document.getElementById("muñeco");

    // Reset text areas
    inputTextarea.value = "";
    outputTextarea.value = "";

    // Reset Mensaje
    tituloE.innerText = "Ningún mensaje fue encontrado";
    parrafoE.innerText = "Ingresa el texto que deseas encriptar o desencriptar";
    muñeco.style.display = "block";
}






