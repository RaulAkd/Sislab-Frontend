import { DetalleOrden } from './detalle-orden';
export class OrdenTrabajo {
    // tslint:disable-next-line:variable-name
    id_orden: string;
    // tslint:disable-next-line:variable-name
    id_factura: string;
    // tslint:disable-next-line:variable-name
    id_cliente: string;
    // tslint:disable-next-line:variable-name
    nombreCliente: string;
    // tslint:disable-next-line:variable-name
    fechaorden_ot: string;
    // tslint:disable-next-line:variable-name
    fechaentrega_ot: string;
    // tslint:disable-next-line:variable-name
    observ_ot: string;
    // tslint:disable-next-line:variable-name
    numeromuestra_ot: number;
    // tslint:disable-next-line:variable-name
    aux_ordent: string;
    // tslint:disable-next-line:variable-name
    estado_ot: string;
    // tslint:disable-next-line:variable-name
    fecha_cierre: string;
    // tslint:disable-next-line:variable-name
    id_usuario: number;
    // tslint:disable-next-line:variable-name
    id_ti: string;
    // tslint:disable-next-line:variable-name
    tipo_ot: string;
    // tslint:disable-next-line:variable-name
    responsable_ot: string;
    // tslint:disable-next-line:variable-name
    nombreLaboratorio: string;
    // tslint:disable-next-line:variable-name
    detalleOrden: DetalleOrden[];
}
