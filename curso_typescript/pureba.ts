function holaMundo(nombre){
	return 'Hola Mundo!! Soy  '+nombre;
}

var nombre = "MA Barracus";
var resultado = holaMundo(nombre);
var etiqueta = <HTMLElement>document.getElementById('container');
etiqueta.innerHTML = resultado;


// Variables y tipos
var name: string = "MA";
var edad: Number = 55;
var programador: boolean = true;
var langs: Array<string>=["PHP","JavaScript","CSS"];

etiqueta.innerHTML = name;

alert("Hola Mundo");
