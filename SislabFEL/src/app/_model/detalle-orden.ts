import { Personal } from './personal';
import { OrdenTrabajo } from './ordenTrabajo';
import { Metodo } from './metodo';
import { Servicio } from './servicio';
import { Muestra } from './muestra';

export class DetalleOrden {
    // tslint:disable-next-line:variable-name
    id_detalleorden: string;
    // tslint:disable-next-line:variable-name
    orden: OrdenTrabajo;
    // tslint:disable-next-line:variable-name
    muestra: Muestra;
    // tslint:disable-next-line:variable-name
    personal: Personal;
    // tslint:disable-next-line:variable-name
    horas_trabajo: number;
    // tslint:disable-next-line:variable-name
    fecha_inicio_analisis: Date;
    // tslint:disable-next-line:variable-name
    fecha_fin_analisis: number;
    // tslint:disable-next-line:variable-name
    id_servicio: string;
    // tslint:disable-next-line:variable-name
    id_metodo: string;
    // tslint:disable-next-line:variable-name
    estado_dot: string;
    // tslint:disable-next-line:variable-name
    size_existencias: string;
    // tslint:disable-next-line:variable-name
    nombreLaboratorio: string;
    // tslint:disable-next-line:variable-name
    nombrePersonal: string;
    // tslint:disable-next-line:variable-name
    nombreServicio: string;
    // tslint:disable-next-line:variable-name
    nombreMetodo: string;
}
