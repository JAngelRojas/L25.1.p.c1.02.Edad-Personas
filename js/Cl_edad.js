export default class edad{

    constructor(){
        this.acEdad = 0;
        this.cntPersonas = 0;
    }
    procesarEdades(edades){
        this.acEdad += edades.edad;
        this.cntPersonas++;
    }
    calcularPromedio(){
        return this.acEdad / this.cntPersonas;
    }
}