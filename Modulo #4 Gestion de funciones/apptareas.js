/*
console.log("Agrergar nuevo alumno");
console.log("Revisar lista de alumnos");
console.log("Eliminar alumno");*/

console.log("Sistema EBAC de Registro de Alumnos");

var registro = [
    {nombre:"Michel Acosta", edad: "28", zonaResidencia: "CDMX", nombreDelPrograma: "Desarrollo Back End con Python", email: "michelacosta@ebac.mx",telefono: "5540206080"},
    {nombre:"Ruby Vargas", edad: "32", zonaResidencia: "EDO MEX", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Rubyvargasa@ebac.mx", telefono: "5511223344"},
    {nombre:"Tony Montana", edad: "45", zonaResidencia: "Veracuz", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Tonymontana@ebac.mx", telefono: "5566557788"},
    {nombre:"Paola Cota", edad: "19", zonaResidencia: "Guanajuato", nombreDelPrograma: "Desarrollo Back End con Python", email: "Paolacota@ebac.mx", telefono: "5612345667"},
    {nombre:"Ruben Lucero", edad: "53", zonaResidencia: "Toluca", nombreDelPrograma: "Inteligencia Artificial", email: "Rubenlucero@ebac.mx", telefono: "5610293846"},
];

function agregarAlumno(){

var nombre = prompt("Ingresa el nombre  del nuevo Alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
var edad = prompt("Ingresa la edad del alumno");
var nombreDelPrograma = prompt("Ingresa el nombre del programa a estudiar");
var email = prompt("Ingresa el email del alumno");
var telefono = prompt("Ingresa el numero celular del alumno")

var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombreDelPrograma: nombreDelPrograma, email: email, telefono: telefono};

registro.push(nuevoAlumno);

}


function consultarRegistros(){
    for(var i =0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombreDelPrograma);
        console.log("Email: " + registro[i].email);
        console.log("telefono: " + registro[i].telefono)
    };
}


do {

var opcion = prompt("Seleccione una opcion:  \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir")


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
