
CREATE DATABASE terreneitor_db;

USE terreneitor_db;

CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Apellido VARCHAR(255),
    CorreoElectronico VARCHAR(255) UNIQUE,
    Contraseña VARCHAR(255),
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from Usuarios;




CREATE TABLE Direcciones (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Pais VARCHAR(100),
    Ciudad VARCHAR(100),
    CodigoPostal VARCHAR(20),
    CalleNumero VARCHAR(255),
    InformacionAdicional VARCHAR(255)
);



CREATE TABLE unidad (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombrePropiedad VARCHAR(255),
    Descripcion TEXT,
    TipoPropiedad VARCHAR(100),
    PrecioPorNoche DECIMAL(10, 2),
    DireccionID VARCHAR(255),
    imagen VARCHAR(100),
    IdUsuario INT,
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(ID)
);



CREATE TABLE Calificaciones (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PropiedadID INT,
    UsuarioID INT,
    Calificacion INT,
    Comentario TEXT,
    FechaCalificacion DATE,
    FOREIGN KEY (PropiedadID) REFERENCES Propiedades(ID),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);


CREATE TABLE Mensajes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    RemitenteID INT,
    DestinatarioID INT,
    ContenidoMensaje TEXT,
    FechaHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RemitenteID) REFERENCES Usuarios(ID),
    FOREIGN KEY (DestinatarioID) REFERENCES Usuarios(ID)
);


CREATE TABLE Favoritos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT,
    PropiedadID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID),
    FOREIGN KEY (PropiedadID) REFERENCES Propiedades(ID)
);


CREATE TABLE Contracts (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PropiedadID INT,
    UsuarioID INT,
    NombreDocumento VARCHAR(255),
    RutaDocumento VARCHAR(255), 
    FechaSubida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PropiedadID) REFERENCES Propiedades(ID),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);


CREATE TABLE Ventas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PropiedadID INT,
    VendedorID INT,
    CompradorID INT,
    PrecioVenta DECIMAL(10, 2),
    FechaVenta DATE,
    FOREIGN KEY (PropiedadID) REFERENCES Propiedades(ID),
    FOREIGN KEY (VendedorID) REFERENCES Usuarios(ID),
    FOREIGN KEY (CompradorID) REFERENCES Usuarios(ID)
);
CREATE TABLE terreneitor_db.users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	Nombre VARCHAR(255),
    Apellido VARCHAR(255),
    CorreoElectronico VARCHAR(255) UNIQUE,
     NumeroTelefono VARCHAR(255),
     FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE usersRed (
    ID INT  PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
	Nombre VARCHAR(255),
    CorreoElectronico VARCHAR(255) UNIQUE,
     FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
