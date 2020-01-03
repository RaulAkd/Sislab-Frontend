import { Unidad } from './unidad';
import { Proveedor } from './proveedor';

export class Compra {
    // tslint:disable-next-line:variable-name
    id_compra: string;
    // tslint:disable-next-line:variable-name
    unidad: string;
    // tslint:disable-next-line:variable-name
    proveedor: Proveedor;
    // tslint:disable-next-line:variable-name
    fecha_co: string;
    // tslint:disable-next-line:variable-name
    monto_co: number;
    // tslint:disable-next-line:variable-name
    descr_compra: string;
    // tslint:disable-next-line:variable-name
    documento_co: string;
    // tslint:disable-next-line:variable-name
    auxidcompra: number;
}
