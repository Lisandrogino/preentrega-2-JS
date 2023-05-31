const cantidadTurnos = 10;



class turnero {

    constructor(id, nombreCliente, vehiculo, trabajoARealizar, turnoFecha, turnoHora){

        this.id = id
        this.nombreCliente = nombreCliente;
        this.vehiculo = vehiculo;
        this.trabajoARealizar = trabajoARealizar;
        this.turnoFecha = turnoFecha;
        this.turnoHora = turnoHora;

    }

    
    // METRODO DE RESERVA DE TURNOS - ESTABLECE LOS DÌAS EN LOS QUE SE PUEDE SACAR TURBI
  
            reservarTurno() {

                const turnoFecha = prompt("Ingrese el día del turno");
                const turnoHora = parseInt(prompt("Ingrese la hora en formarto de 0 a 18"));

            if (turnoFecha === "sabado" && (turnoHora < 7 || turnoHora > 14)) {
            alert("Adolfo Car Detaile atiende de 8.00 a 14.00 hs");

            } else if (turnoFecha === "domingo") {
            alert("Adolfo Car Detarile no trabaja los domingos.");
            }
            
        else {

            this.turnoFecha = turnoFecha;
            this.turnoHora = turnoHora;

            alert("Su turno está reservado para el " + turnoFecha + " a las " + turnoHora + ":00.");

        }
                             }

    // METODO DE TRABABOS Y COSTOS                             

            trabajoYCosto(){

                const trabajoARealizar= parseInt(prompt("Selecciona un Vehìculo  lavar:  1- Automóvil  2- Utilitario  3-  Camioneta"))

                switch(trabajoARealizar){
    
                    case 1:
    
                        let precioAuto = 3000;
                        alert("El costo del lavado es $3000, sì nos pagas en el local el precio es " + precioConDescuento(precioAuto));
                    break
    
                    case 2: 
                    
                        let precioUtilitario = 4000;
                        alert("El costo del lavado es $4000, sì nos pagas en el local el precio es " + precioConDescuento(precioUtilitario));
                        
                    break
    
                    case 3:
    
                        let precioCamioneta = 5000;
                        alert("El costo del lavado es $5000, sì nos pagas en el local el precio es " + precioConDescuento(precioCamioneta))
        
                    break  
    
                    default:
    
                        alert("La opción no es válida, ingresa una opción del menu.")
    
                    break 
                    
    }
    
                 
            }        
            
    

}

        const preciocConDescuento= function(precio) {return precio - (precio * 0.10)};
