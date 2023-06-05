
class Vehiculousuario{

    constructor(id, tipoUsario, nombre, tipoVehiculo, contacto, mail) {
        this.id=id
        this.tipoUsario = tipoUsario
        this.nombre = nombre;
        this.tipoVehiculo = tipoVehiculo;
        this.contacto = contacto;
        this.mail = mail;
    }

}

const turnosClientes = []

const id = parseInt(prompt("Ingrese el ID del vehículo:"));
const tipoUsario = prompt("Ingrese el tipo de usuario(empresa/particular):");
const nombre = prompt("Ingrese el nombre:");
const tipoVehiculo = prompt("Ingrese el tipo de vehículo(automóvil/utilitario/camioneta):");
const contacto = parseInt(prompt("Ingrese el celular:"));
const mail = prompt("Ingrese el correo electrónico:");

turnosClientes.push(new Vehiculousuario(id, tipoUsario, nombre, tipoVehiculo, contacto, mail));

turnosClientes.push(new Vehiculousuario(1, "empresa", "Nation SA", "Peugeot 307", 3492605378,"nationsa@gmail.com"));
turnosClientes.push(new Vehiculousuario(2, "particular","Katia Alemann", "BMW", 3492605378, "nationsa@gmail.com"));
turnosClientes.push(new Vehiculousuario(3, "particular","Alain Delon", "Jaguar", 3492456098, "delon@gmail.com"));
turnosClientes.push(new Vehiculousuario(4, "particular","James Deen", "Ferrari", 3492278943, "deam1931@gmail.com"));
turnosClientes.push(new Vehiculousuario(5, "empresa","Nation SA", "VW", 3492605378, "nationsa@gmail.com"));
turnosClientes.push(new Vehiculousuario(6, "particular","Sir Patrick stuar", "Uss Enterprise", 3492605378, "federation@gmail.com"));
turnosClientes.push(new Vehiculousuario(7, "particular","Q", "Fiat", 3492605378, "q@gmail.com"));


console.log(turnosClientes.length)
console.log(turnosClientes)
turnosClientes.pop()
console.log(turnosClientes.length)

turnosClientes.push(new Vehiculousuario(8, "empresa","Long Automotores SA", "Ford Focus One", 3492135789,"nationsa@gmail.com"));

console.log(turnosClientes.length)

const buscarUsuario = turnosClientes.find((el) => el.nombre==="Alain Delon");
console.log(buscarUsuario)

const filtrarEmpresas = turnosClientes.filter((el) =>el.tipoUsario.includes("empresa"));
console.log(filtrarEmpresas)


function verificarVehiculoEnTurnero(tipoVehiculo) {
    return turnosClientes.some((el) => el.tipoVehiculo === tipoVehiculo);
  }

  console.log(verificarVehiculoEnTurnero("BMW"))

  function obtenerNombresClientes() {
    return turnosClientes.map((el) => el.nombre);
  }  

  console.log(obtenerNombresClientes())

