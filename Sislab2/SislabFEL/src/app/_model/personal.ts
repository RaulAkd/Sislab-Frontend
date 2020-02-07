import { CargosPersonal } from './cargospersonal';
import { Servicio } from './servicio';
import { TipoPersonal } from './tipoPersonal';

export class Personal {
    // tslint:disable-next-line:variable-name
    id_personal: string;
    // tslint:disable-next-line:variable-name
    tipoPersonal: TipoPersonal;
    // tslint:disable-next-line:variable-name
    cargosPersonal: CargosPersonal;
    // tslint:disable-next-line:variable-name
    cedula_pe: string;
    // tslint:disable-next-line:variable-name
    nombres_pe: string;
    // tslint:disable-next-line:variable-name
    direccion_pe: string;
    // tslint:disable-next-line:variable-name
    telefono_pe: string;
    // tslint:disable-next-line:variable-name
    email_pe: string;
    // tslint:disable-next-line:variable-name
    cargo_pe: string;
    // tslint:disable-next-line:variable-name
    tipo_pe: string;
    // tslint:disable-next-line:variable-name
    sueldo_pe: number;
    // tslint:disable-next-line:variable-name
    fechaing_pe: Date;
    // tslint:disable-next-line:variable-name
    fechafin_pe: Date;
    // tslint:disable-next-line:variable-name
    aux_idpersonal: number;
    // tslint:disable-next-line:variable-name
    id_unidad: number;
}
