import { Servicio } from './servicio';
import { DetalleMetodo } from './detalleMetodo';

export class Metodo {
    // tslint:disable-next-line:variable-name
    id_metodo: string;
    // tslint:disable-next-line:variable-name
    servicio: Servicio;
    // tslint:disable-next-line:variable-name
    descr_metodo: string;
    // tslint:disable-next-line:variable-name
    certificado_mt: string;
    // tslint:disable-next-line:variable-name
    nombre_mt: string;
    // tslint:disable-next-line:variable-name
    aux_idmetodo: string;
    // tslint:disable-next-line:variable-name
    detalleMetodo: DetalleMetodo[];
}
