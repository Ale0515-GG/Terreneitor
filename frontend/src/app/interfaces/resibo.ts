export interface Resibo {
    ID?: string;
    NombrePropiedad?: string;
    Descripcion?: string;
    TipoPropiedad?: string;
    PrecioPorNoche?: number;
    DireccionID?: string;
    IdUsuario?: number; // Propiedad para la clave foránea del usuario
}
