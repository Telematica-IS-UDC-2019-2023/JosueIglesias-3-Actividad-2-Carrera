class Dado {
    constructor() {}
    lanzarDado(){
        return Number(Math.round(Math.random() * (6 - 1) + 1))
    }
}
class Corredor {
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
    }

    correr(avance){
        this.posicion += avance
    }

}
var corredor1 = new Corredor("Juampi")
var corredor2 = new Corredor("Mario")
var dado = new Dado
var avance1 = 0
var avance2 = 0

function numAvance(){
    let num = dado.lanzarDado()
    if (num === 1){
        return 3
    } else if (num < 4){
        return 1
    } else if (num <= 6){
        return 2
    }
}

 while (corredor1.posicion < 100 && corredor2.posicion < 100){
    avance1 = numAvance()
    avance2 = numAvance()
    corredor1.correr(avance1)
    corredor2.correr(avance2)
    console.log("Posicion " + corredor1.nombre + ": " + corredor1.posicion + " Posicion " + corredor2.nombre + ": " + corredor2.posicion)
} 

if ( corredor1.posicion > corredor2.posicion){
    console.log(" Juampi ganó")
} else if(corredor2.posicion > corredor1.posicion) {
    console.log(" Mario ganó")
} else {
    console.log(" Empate")
}