var destino =prompt("Ingrese su destino");
var precio =prompt("Ingrese el valor");
if(destino == "Mexico"){
    precio=precio-precio*0.5
    document.write(precio);
}
else if(destino =="España"){
    precio=precio-precio*0.10
    document.write(precio);
}
else if(destino =="Londres"){
    precio=precio-precio*0.20
    document.write(precio);
}
else if(destino =="Africa"){
    precio=precio-precio*0.25
    document.write(precio);
}
else{
    document.write("No tiene ningun descuento")
}