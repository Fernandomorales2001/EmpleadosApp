export interface Empleado {
    idempleado?:     number;
    nombre:         string;
    apellido:       string;
    direccion:      string;
    salario:        string;
    codigoempleado: string;
    empresa:        Empresa;
    antiguedad:     string;
    alt_img?:        string;
}

export enum Empresa {
    AllasRepuestos = "Allas Repuestos",
    LearCorporation = "Lear Corporation",
}