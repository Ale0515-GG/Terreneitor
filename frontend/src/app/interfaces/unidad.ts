export interface Unidad {
    ID?: number;
    NombrePropiedad?: string;
    Descripcion?: string;
    TipoPropiedad?: string;
    PrecioPorNoche?: number;
    DireccionID?: string;
    IdUsuario?: number; // Propiedad para la clave foránea del usuario
}
