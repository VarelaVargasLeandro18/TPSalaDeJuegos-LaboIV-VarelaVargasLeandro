export class Usuario {

    error : boolean = false;

    // EL USUARIO NO DEBERÍA TENER QUE TENER ESTE ERROR, PERO NO LE ENCONTRÉ ALTERNATIVA.
    constructor(
        public email? : string,
        public contrasenia? : string,
        public nombre? : string,
        public apellido? : string
    ) {}

    getError () : boolean {
        return this.error;
    }

    setError () : Usuario {
        this.error = true;
        return this;
    }


}
