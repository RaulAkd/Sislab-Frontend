import { UnidadMedida } from './unidadMedida';
import { Existencias } from './existencias';
import { Metodo } from './metodo';

export class DetalleMetodo {
    // tslint:disable-next-line:variable-name
    id_detallemetodo: string;
    // tslint:disable-next-line:variable-name
    id_existencia: string;
    // tslint:disable-next-line:variable-name
    metodo: Metodo;
    // tslint:disable-next-line:variable-name
    unidadMedida: UnidadMedida;
    // tslint:disable-next-line:variable-name
    cantidad_dmt: number;
    // tslint:disable-next-line:variable-name
    aux: string;
    // tslint:disable-next-line:variable-name
    aux2: string;
}
