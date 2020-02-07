import { TipoProducto } from './tipoProducto';
import { RiesgoEspecifico } from './riesgoEspecifico';

export class Producto {
    // tslint:disable-next-line:variable-name
    id_producto: string;
    // tslint:disable-next-line:variable-name
    riesgoEspecifico: RiesgoEspecifico;
    // tslint:disable-next-line:variable-name
    nombre_pr: string;
    // tslint:disable-next-line:variable-name
    descr_pr: string;
    // tslint:disable-next-line:variable-name
    stockmin_pr: number;
    // tslint:disable-next-line:variable-name
    stock_pr: number;
    // tslint:disable-next-line:variable-name
    stockcrt_pr: number;
    // tslint:disable-next-line:variable-name
    iupac_pr: string;
    // tslint:disable-next-line:variable-name
    riesgo_pr: string;
    // tslint:disable-next-line:variable-name
    formula_pr: string;
    // tslint:disable-next-line:variable-name
    colorriesgo_pr: string;
    // tslint:disable-next-line:variable-name
    precio_pr: string;
    // tslint:disable-next-line:variable-name
    riesgosalud_pr: string;
    // tslint:disable-next-line:variable-name
    riesgoinflamabilidad_pr: string;
    // tslint:disable-next-line:variable-name
    riesgoreactividad_pr: string;
    // tslint:disable-next-line:variable-name
    auxid_pr: string;
    // tslint:disable-next-line:variable-name
    tipoProducto: TipoProducto;
}
