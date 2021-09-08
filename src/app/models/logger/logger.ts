import { Usuario } from "../usuario/usuario";

export class Logger {

    constructor(
        public dateTime : Date,
        public usuario : Usuario,
        public eventLog : string
    ){}

}
