var calificacion =prompt("Ingrese su calificacion");

if(calificacion>= 7 && calificacion<9 ){
    document.write("Aprobado");
}
else if(calificacion>=9){
    document.write("Felicitaciones promedio alto");
}else{
    document.write("Reprobado");
}

//Condicionales con (si entonces):
var calificacion =prompt("Ingrese su calificación:");

if(calificacion>= 7 && calificacion<9 ){
    alert("Aprobado");
}else if(calificacion>= 9 && calificacion<=10){
    alert("Felicitaciones promedio alto");    
}else if(calificacion> 10){
    alert("Solo se aceptan notas inferiores a 10")
}else{
    alert("Reprobado");
}
