
--CREAr BASE DE DATOS Centro_cultural

--AHORA INSERTAMOS ESTO:
CREATE TABLE Epoca (
    Epoca_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(255),
    Inicio INT NOT NULL,
    Final INT
);


CREATE TABLE Genero (
    Genero_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Origen VARCHAR(100) NOT NULL
);


CREATE TABLE Epoca_Genero (
    Epoca_genero_id INT PRIMARY KEY AUTO_INCREMENT,
    Epoca_id INT,
    Genero_id INT,
    FOREIGN KEY (Epoca_id) REFERENCES Epoca(Epoca_id),
    FOREIGN KEY (Genero_id) REFERENCES Genero(Genero_id)
);


CREATE TABLE Musico (
    Musico_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Historia VARCHAR(255) NOT NULL,
    Fecha_nacimiento DATE NOT NULL,
    Fecha_muerte DATE
);


CREATE TABLE Genero_musico (
    Genero_musico_id INT PRIMARY KEY AUTO_INCREMENT,
    Musico_id INT,
    Genero_id INT,
    FOREIGN KEY (Genero_id) REFERENCES Genero(Genero_id),
    FOREIGN KEY (Musico_id) REFERENCES Musico(Musico_id)
);




INSERT INTO Epoca (Nombre, Descripcion, Inicio, Final) VALUES 
('Renacimiento', 'Período de gran desarrollo cultural en Europa', 1400, 1600),
('Barroco', 'Época de ornamento y contraste en la música', 1600, 1750),
('Clasicismo', 'Época de equilibrio y claridad formal', 1730, 1820),
('Romanticismo', 'Época de expresión emocional y pasión', 1780, 1910),
('Impresionismo', 'Enfoque en la atmósfera y la sugerencia', 1870, 1920),
('Expresionismo', 'Época de emociones fuertes y expresión interna', 1905, 1935),
('Postromanticismo', 'Transición del Romanticismo a la música moderna', 1880, 1920),
('Edad Media', 'Período de la música temprana en Europa', 500, 1400),
('Neoclasicismo', 'Retorno a formas clásicas', 1750, NULL),
('Contemporánea', 'Música moderna y actual', 1950, NULL),  
('Minimalismo', 'Reducción de elementos musicales', 1960, NULL),
('Futurismo', 'Reflejo del avance y la velocidad del mundo moderno', 1909, 1944),
('Surrealismo', 'Época de experimentación y lo ilógico', 1924, 1950),
('Electroacústica', 'Uso de tecnología en la composición musical', 1948, NULL),
('Contrología', 'Exploración del control en la música', 1959, NULL),
('Música Serial', 'Técnica basada en series ordenadas de elementos musicales', 1940, NULL),
('Música Aleatoria', 'Composiciones sin estructura definida', 1913, NULL),
('Música Concreta', 'Manipulación de sonidos pregrabados', 1948, NULL),
('Música Experimental', 'Búsqueda de nuevas formas y sonidos', 1950, NULL);

INSERT INTO Genero (Nombre, Descripcion, Origen) VALUES 
('Pop', 'Estilo popular de música comercial', 'Estados Unidos'),
('Folk', 'Música tradicional transmitida oralmente', 'Varios países'),
('Blues', 'Música de raíces africanas en Estados Unidos', 'Estados Unidos'),
('Ska', 'Estilo musical jamaicano con influencia de calipso y jazz', 'Jamaica'),
('Metal', 'Género con fuerte énfasis en guitarras distorsionadas', 'Reino Unido'),
('Punk', 'Movimiento musical contracultural y de rebeldía', 'Estados Unidos'),
('R&B', 'Rhythm and Blues: Fusión de blues, gospel y jazz', 'Estados Unidos'),
('Country', 'Música tradicional rural estadounidense', 'Estados Unidos'),
('Reggaeton', 'Estilo de música urbana con influencia del reggae y hip hop', 'Puerto Rico'),
('Soul', 'Música afroamericana con énfasis en voz y ritmos', 'Estados Unidos'),
('Funk', 'Música rítmica con fuerte énfasis en el groove', 'Estados Unidos'),
('Electrónica', 'Música creada con instrumentos electrónicos', 'Varios países'),
('Gospel', 'Música espiritual de las iglesias afroamericanas', 'Estados Unidos'),
('J-Pop', 'Música popular japonesa', 'Japón'),
('Indie', 'Música independiente y alternativa', 'Varios países'),
('Trap', 'Subgénero del hip hop con énfasis en el ritmo', 'Estados Unidos'),
('Salsa', 'Ritmos caribeños y afrolatinos', 'Varios países latinoamericanos'),
('Jazz Fusion', 'Fusión de jazz con otros estilos musicales', 'Estados Unidos'),
('Disco', 'Música bailable de los años 70', 'Estados Unidos'),
('Techno', 'Género de música electrónica de ritmo acelerado', 'Alemania');

INSERT INTO Musico (Nombre, Historia, Fecha_nacimiento, Fecha_muerte) VALUES 
('Freddie Mercury', 'Vocalista de Queen y leyenda del rock', '1946-09-05', '1991-11-24'),
('Michael Jackson', 'Rey del pop y exitoso cantante y bailarín', '1958-08-29', '2009-06-25'),
('David Bowie', 'Innovador y camaleónico artista del rock', '1947-01-08', '2016-01-10'),
('Prince', 'Polifacético músico y genio creativo', '1958-06-07', '2016-04-21'),
('Bob Marley', 'Icono del reggae y activista político', '1945-02-06', '1981-05-11'),
('Elvis Presley', 'El Rey del Rock and Roll', '1935-01-08', '1977-08-16'),
('John Lennon', 'Miembro fundador de The Beatles', '1940-10-09', '1980-12-08'),
('Jimi Hendrix', 'Innovador guitarrista y leyenda del rock', '1942-11-27', '1970-09-18'),
('Amy Winehouse', 'Talentosa cantante con estilo vintage', '1983-09-14', '2011-07-23'),
('Kurt Cobain', 'Líder de Nirvana y símbolo del grunge', '1967-02-20', '1994-04-05'),
('Freddie Mercury', 'Vocalista de Queen y leyenda del rock', '1946-09-05', '1991-11-24'),
('Beyoncé', 'Cantante y actriz con una exitosa carrera en solitario', '1981-09-04', NULL),
('Stevie Wonder', 'Músico prodigioso y exitoso cantante', '1950-05-13', NULL),
('Paul McCartney', 'Miembro fundador de The Beatles', '1942-06-18', NULL),
('Whitney Houston', 'Voz icónica y gran talento vocal', '1963-08-09', '2012-02-11'),
('Aretha Franklin', 'La Reina del Soul', '1942-03-25', '2018-08-16'),
('Frank Sinatra', 'Cantante y actor legendario', '1915-12-12', '1998-05-14'),
('Freddy Fender', 'Cantante de música country y tejana', '1937-06-04', '2006-10-14'),
('Chuck Berry', 'Padre del rock and roll', '1926-10-18', '2017-03-18'),
('Tina Turner', 'Reina del rock y soul', '1939-11-26', NULL);

INSERT INTO Epoca_Genero (Epoca_id, Genero_id) VALUES 
    (1, 1), (1, 2), (2, 3), (2, 4), (3, 5),
    (3, 6), (4, 7), (4, 8), (5, 9), (5, 10),
    (6, 11), (6, 12), (7, 13), (7, 14), (8, 15),
    (8, 16), (9, 17), (9, 18), (10, 19), (10, 20),
    (11, 1), (11, 2), (12, 3), (12, 4), (13, 5),
    (13, 6), (14, 7), (14, 8), (15, 9), (15, 10),
    (16, 11), (16, 12), (17, 13), (17, 14), (18, 15),
    (18, 16), (19, 17), (19, 18);

INSERT INTO Genero_musico (Genero_id, Musico_id) VALUES 
    (1, 1), (2, 1), (3, 2), (4, 2), (5, 3),
    (6, 3), (7, 4), (8, 4), (9, 5), (10, 5),
    (11, 6), (12, 6), (13, 7), (14, 7), (15, 8),
    (16, 8), (17, 9), (18, 9), (19, 10), (20, 10),
    (1, 11), (2, 11), (3, 12), (4, 12), (5, 13),
    (6, 13), (7, 14), (8, 14), (9, 15), (10, 15),
        (11, 16), (12, 17), (13, 18), (14, 19), (15, 20),
    (16, 1), (17, 2), (18, 3), (19, 4), (20, 5),
    (1, 6), (2, 7), (3, 8), (4, 9), (5, 10),
    (6, 11), (7, 12), (8, 13), (9, 14), (10, 15);





-- EJERCICIOS

--1. Obtener todos los músicos que pertenecen al género con ID 5:
SELECT m.* 
FROM Musico m
INNER JOIN Genero_musico gm ON m.Musico_id = gm.Musico_id 
WHERE gm.Genero_id = 5;

--2. Obtener todos los géneros musicales a los que pertenece el músico con ID 12:

SELECT g.*
FROM Genero g 
INNER JOIN Genero_musico gm ON gm.Genero_id = g.Genero_id
WHERE m.Musico_id = 12;

--3. Obtener los músicos que siguen vivos;

SELECT m.* 
FROM Musico m
WHERE m.Fecha_muerte IS NULL;

--4. Géneros musicales por época:

SELECT g.*
FROM Epoca_Genero eg
INNER JOIN Epoca e ON e.Epoca_id = eg.Epoca_id
INNER JOIN Genero g ON g.Genero_id = eg.Genero_id
ORDER BY e.Inicio ASC



--5. Obtener las épocas musicales cuyo nombre empieza con la letra ‘C’










