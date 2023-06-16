var helado =prompt("Ingrese su sabor");

if(helado == "Oreo"){
    precio=1500-1500*0.5
    document.write("Este helado tiene descuento y su total a pagar es :"+precio);
}
else if(helado =="Fresa"){
    precio=2000
    document.write(precio);
}
else if(helado =="Vainilla"){
    precio=3000
    document.write(precio);
}
else if(helado =="Brawnie"){
    precio=5000-5000*0.10
    document.write("Este helado tiene descuento y su total a pagar es :"+precio);
}
else{
    document.write("No tiene ningun descuento")
}