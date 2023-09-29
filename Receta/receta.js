function receta(){
        plato= prompt("Ingresa la cantidad de platos que necesitas:");
var plato, papas, salchichas, salsas , maiz ,queso ;

papas= plato*300;
salchichas = plato*250;    
salsas= plato*30;
maiz= plato*80;
queso= plato*100;
document.write("Se necesita para una salchipapas lo siguente:<br>" + papas +"gramos papas<br>"+ salchichas+" gramos de salchichas <br>"
+salsas +" gramos de salsa <br> "+ maiz+ "gramos de maiz<br>" + queso+" gramos de queso ");

    }

    function costos(){

        plato = Number(prompt("Ingresa la cantidad de platos que necesitas:"));
        var plato, papas, salchichas, salsas , maiz ,queso ,total ;
papas= plato*1200;
salchichas = plato*10000;   
salsas =plato*4000;
maiz= plato*5000;
queso= plato*9000;
total= papas+salchichas+salsas+maiz+queso;
document.write("los costos para el plato de salchipapa son: "+ total);
    }