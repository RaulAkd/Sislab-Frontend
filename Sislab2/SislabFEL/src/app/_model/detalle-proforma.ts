import { Metodo } from './metodo';
import { Servicio } from './servicio';
import { Proforma } from './proforma';

export class DetalleProforma {
    // tslint:disable-next-line:variable-name
    id_detallepo: string;
    // tslint:disable-next-line:variable-name
    proforma: Proforma;
    // tslint:disable-next-line:variable-name
    metodo: Metodo;
    // tslint:disable-next-line:variable-name
    servicio: Servicio;
    // tslint:disable-next-line:variable-name
    cantidad_po: number;
    // tslint:disable-next-line:variable-name
    valorunitario_po: number;
    // tslint:disable-next-line:variable-name
    totalservicio_po: number;
    // tslint:disable-next-line:variable-name
    id_laboratorio: string;
    // tslint:disable-next-line:variable-name
    nombreLaboratorio: string;
}
