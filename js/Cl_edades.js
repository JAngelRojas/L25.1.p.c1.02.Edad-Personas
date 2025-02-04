export default class edades {
    constructor( e) {
       
        this.edad = e;
    }
    set Edad(e) {
        this.edad = +e;
    }
    get Edad() {
        return this.edad;
    }

}