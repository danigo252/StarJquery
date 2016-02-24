/**
 * Created by daniel on 23/02/16.
 */
$(document).on("ready", inicio);

function inicio(){
    $("#container img").on("click",abrirFull);
    $("#imgFull").on("click" ,cerrarFull);
}

function abrirFull(){

    var nombre = $(this).attr('alt') + "_small";
    var direccion = "img/" + nombre + ".jpg";


    $("#imgFull").attr('src',direccion );

    $("#previa").fadeIn();

}

function cerrarFull(){
    $("#previa").fadeOut();
}