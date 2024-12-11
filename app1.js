/*
console.log("Agrergar nuevo alumno");
console.log("Revisar lista de alumnos");
console.log("Eliminar alumno");*/

console.log("Sistema EBAC de Reggistro de Alumnos");

var registro = [
    {nombre:"Michel Acosta", edad: "28", zonaResidencia: "CDMX", nombreDelPrograma: "Desarrollo Back End con Python", email: "michelacosta@ebac.mx"},
    {nombre:"Ruby Vargas", edad: "32", zonaResidencia: "EDO MEX", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Rubyvargasa@ebac.mx"},
    {nombre:"Tony Montana", edad: "45", zonaResidencia: "Veracuz", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Tonymontana@ebac.mx"},
    {nombre:"Paola Cota", edad: "19", zonaResidencia: "Guanajuato", nombreDelPrograma: "Desarrollo Back End con Python", email: "Paolacota@ebac.mx"},
    {nombre:"Ruben Lucero", edad: "53", zonaResidencia: "Toluca", nombreDelPrograma: "Inteligencia Artificial", email: "Rubenlucero@ebac.mx"}
];

function agregarAlumno(){

var nombre = prompt("Ingresa el nombre  del nuevo Alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
var edad = prompt("Ingresa la edad del alumno");
var nombreDelPrograma = prompt("Ingresa el nombre del programa a estudiar");
var email = prompt("Ingresa el email del alumno");

var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombreDelPrograma: nombreDelPrograma, email: email};

registro.push(nuevoAlumno);

}

function consultarRegistros(){
    for(var i =0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombreDelPrograma);
        console.log("Email: " + registro[i].email);
    };
}


do {



//para agregar las "opciones" la forma en la que escribimos el codigo es \n1...\n20 hasta los necesarios, utilizando la palabra reservada "var":

var opcion = prompt("Seleccione una opcion:  \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir")


//Usando la condicional "if" y "if else" pada poder agregar las opciones a seleccionar para los usuarios:

if(opcion === "1"){
    agregarAlumno();
}  else if(opcion === "2") {
    consultarRegistros();
}  else if(opcion === "3"){
    alert("Eliminar registro de alumno");
}  else if("Salida"){
    alert("Salir del sistema");
}  else{
    alert("Opcion invalida, por favor ingresa otra");
}

var continuar = prompt("¿Deseas hacer otra opcion? (s/n)");

} while(continuar === "s");



//Utilizando la palabra reservada "var" podemos agregar la informacion necesaria, con respecto a las opciones agregadas en el punto anterior:





//Se pone la "i" por que estamos trabajando en el proyecto guardado llamado "Index", pero se puede poner cualquier letra
//El "0" despues del igual no cambia, ya que en la programacion iniciamos contando desde el "0"
//lo que se traduce del codigo de abajo, cuenta el " var registro" desde el contador "0" y el "i++" significa incremetar en 1



/*
//Para el 100% de calificacion:
//Para que los datos impresos en consola estén separados entre alumnos, como le harías? (Pista: console.log):

    const alumnos = ["Michel Acosta", "Ruby Vargas", "Tony Montana","Paola Cota","Ruben Lucero"];
alumnos.forEach(alumno => {
    console.log("Alumno:", alumno);
    console.log("-".repeat(20));  // Línea separadora
});


//Para el 100% de calificacion:
//Por último, viendo como funciona esto:  como puedes hacerle para imprimir solo la edad de Ruby fuera del ciclo for?:

for (var i = 0; i < registro.length; i++) {
    if (registro[i].nombre === "Ruby Vargas") {
        edadRuby = registro[i].edad;
        break;  // Salir del ciclo una vez encontrada la edad de Ruby
    }
}

console.log("Edad de Ruby:", edadRuby);*/