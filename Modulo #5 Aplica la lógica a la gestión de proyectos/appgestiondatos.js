/*
console.log("Agrergar nuevo alumno");
console.log("Revisar lista de alumnos");
console.log("Eliminar alumno");*/


//Asi es como "imprime" o mandara el mensaje al abrir en el buscador.
console.log("Sistema EBAC de Registro de Alumnos");


//Estos "registros" son los datos que ya vienen incluidos los cuales se pueden modificar, eliminar, agregar y se pueden revisar directamente en "inspeccionar" de la pagina web.
var registro = [
    {nombre:"Michel Acosta", edad: "28", zonaResidencia: "CDMX", nombreDelPrograma: "Desarrollo Back End con Python", email: "michelacosta@ebac.mx"},
    {nombre:"Ruby Vargas", edad: "32", zonaResidencia: "EDO MEX", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Rubyvargasa@ebac.mx"},
    {nombre:"Tony Montana", edad: "45", zonaResidencia: "Veracuz", nombreDelPrograma: "Desarrollo Front End de Cero a Pro", email: "Tonymontana@ebac.mx"},
    {nombre:"Paola Cota", edad: "19", zonaResidencia: "Guanajuato", nombreDelPrograma: "Desarrollo Back End con Python", email: "Paolacota@ebac.mx"},
    {nombre:"Ruben Lucero", edad: "53", zonaResidencia: "Toluca", nombreDelPrograma: "Inteligencia Artificial", email: "Rubenlucero@ebac.mx"},
];


//Esta funcion nos va a permitir agregar nuevos alumnos directamente en la pagina web y con los dastos solicitados.
function agregarAlumno(){

var nombre = prompt("Ingresa el nombre  del nuevo Alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
var edad = prompt("Ingresa la edad del alumno");
var nombreDelPrograma = prompt("Ingresa el nombre del programa a estudiar");
var email = prompt("Ingresa el email del alumno");

var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombreDelPrograma: nombreDelPrograma, email: email};


//En conjunto con el codigo anterior, ayuda a agregar la informacion del nuevo alumno.
registro.push(nuevoAlumno);

}

//Esta funcion sirve paara revisar la informacion de todos los registros de los alumnos.
function consultarRegistros(){
    for(var i =0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombreDelPrograma);
        console.log("Email: " + registro[i].email);
    };
}


//Esta funcion elimina a algun alumno agregado.
function eliminarAlumno(){
  var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

  registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);


}


//Este ciclo "do" perrmite repetir el menu cuantas veces sea hasta que no se cumpla alguna condicion.
do {


//Estan son las opciones, el "menu" que le saldran al usuario para que pueda "navegar" en los registros.
var opcion = prompt("Seleccione una opcion:  \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir")


//Este ciclo "if" da a elegir al usuario que opcion quiere escribir.
if(opcion === "1"){
    agregarAlumno();
}  else if(opcion === "2") {
    consultarRegistros();
}  else if(opcion === "3"){
    eliminarAlumno();
}  else if("Salida"){
    alert("Salir del sistema");
}  else{
    alert("Opcion invalida, por favor ingresa otra");
}


//Esta funcion seguira diciendole al usuario si quiere seguir haciendo otra accion.
var continuar = prompt("¿Deseas hacer otra opcion? (s/n)");

//Esta funcion "while" sigue repitiendo el "menu" si se le presiona la tecla "s".
} while(continuar === "s");
