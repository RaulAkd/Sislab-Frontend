import { TipoProducto } from './tipoProducto';
import { Caracteristica } from './caracteristica';
import { Posgiro } from './posgiro';
import { Grado } from './grado';
import { EstadoProducto } from './estadoProducto';
import { UnidadMedida } from './unidadMedida';
import { Presentacion } from './presentacion';
import { Bodega } from './bodega';
import { TipoServicio } from './tipoServicio';
import { Producto } from './producto';
import { Concentracion } from './concentracion';
export class Existencias {
    // tslint:disable-next-line:variable-name
    id_existencia: string;
    // tslint:disable-next-line:variable-name
    id_unidad: string;
    // tslint:disable-next-line:variable-name
    producto: Producto;
    // tslint:disable-next-line:variable-name
    bodega: Bodega;
    // tslint:disable-next-line:variable-name
    presentacion: Presentacion;
    // tslint:disable-next-line:variable-name
    unidadMedida: UnidadMedida;
    // tslint:disable-next-line:variable-name
    estadoProducto: EstadoProducto;
    // tslint:disable-next-line:variable-name
    grado: Grado;
    // tslint:disable-next-line:variable-name
    hidratacion: string;
    // tslint:disable-next-line:variable-name
    posgiro: Posgiro;
    // tslint:disable-next-line:variable-name
    cantidad_e: number;
    // tslint:disable-next-line:variable-name
    fechacad_e: Date;
    // tslint:disable-next-line:variable-name
    obsolescencia_e: string;
    // tslint:disable-next-line:variable-name
    tasauso_e: number;
    // tslint:disable-next-line:variable-name
    nenvase_e: number;
    // tslint:disable-next-line:variable-name
    fechabaja_e: Date;
    // tslint:disable-next-line:variable-name
    ubica_e: string;
    // tslint:disable-next-line:variable-name
    pureza_e: string;
    // tslint:disable-next-line:variable-name
    concentracion: Concentracion;
    // tslint:disable-next-line:variable-name
    caracteristica: Caracteristica;
    // tslint:disable-next-line:variable-name
    cantidadneta_e: Caracteristica;
    // tslint:disable-next-line:variable-name
    tipoProducto: TipoProducto;
    // tslint:disable-next-line:variable-name
    dism: number;
    // tslint:disable-next-line:variable-name
    increm: number;
    // tslint:disable-next-line:variable-name
    aux1: string;
    // tslint:disable-next-line:variable-name
    aux2: string;
    // tslint:disable-next-line:variable-name
    toi: string;
}
