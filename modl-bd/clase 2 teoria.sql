--//  DIA 2 MYSQL QERYS EN CONSOLA DE LOCOS!

--Los comandos basicos:

SELECT --"nos da informacion / nos selecciona datos de la base de datos y nos lo sirve en bandeja."
SELECT current_date() --> fecha actual.
SELECT user() --> nos lista los usuarios de la base de datos.

show database --> nos muestra las bases de datos que tenemos.

--> para crea una base de datos
CREATE database access_control;

show databases; --> nos muestra las BD que tenemos, la que creamos deberia aparecer

-- Para usar una base de datos usamos use todo poderoso.!

use access_control;

SELECT DATABASE(); -- nos muestra la BD que estamos usando.

DROP DATABASE access_control -- con esto borramos una base de datos. CUIDADO! SACA UN BACKUP!

CREATE database clinica_veterinaria;

use clinica_veterinaria;

-- creamos una tabla en nuestra bd se llamará mascotas, tendra diferentes columnas **recuerda comprobar que estan en la BD correcta! SELECT DATABASE();
CREATE TABLE Mascotas(
    id int not null auto_increment,
    tipo enum('pez','mamifero','ave') not null,
    nombre varchar(50),
    primary key(id)
);
-- el enum es como un select de html, un array y podemos tener esos valores 1 selecciondo


SHOW TABLES; --- nos muestra las tablas de la bd en use! ver tablas.


ALTER TABLE Mascotas nombre name VARCHAR(50); -- es el update para editar nuestras tablas de la bd.

describe Mascotas --> nos muestra la estructura de nuestra tabla. "descripcion exacta"

ALTER TABLE Mascotas ADD edad int DEFAULT 0 NOT NULL; -- creamos una nueva columna "un campo" en nuestra tabla


INSERT INTO Mascotas (tipo,name,edad) VALUES 
    ('mamifero', 'perro', 10), 
    ('mamifero', 'gato', 6), 
    ('ave', 'loro', 1), 
    ('pez', 'lubina', 4), 
    ('mamifero', 'ardilla', 2)


SELECT * FROM Mascotas -- seleccionamos los todos datos de nuestra tabla para verlos

SELECT tipo FROM Mascotas -- sacamos la info de tipo

-- nos seleciona todos los datos de Mascotas donde el tipo es igual a mamifero
SELECT * FROM Mascotas where edad > 5 AND tipo = 'mamifero'

-- nos el dato "tipo" reasigando el nombre de la columna "tipo" por "tipoAnimal".
SELECT tipo as tipoAnimal FROM Mascotas

-- para contar el total de registros.
SELECT COUNT(*) as total FROM Mascotas

-- actualizamos el dato edad para aquellas filas "registros" que tengan el tipo mamifero
UPDATE Mascotas SET edad = 9 WHERE tipo = 'mamifero'

UPDATE Mascotas SET edad = 9 WHERE edad != 9

-- eliminamos todas las filas "registros" donde edad != 9
DELETE Mascotas WHERE edad != 9


-- EL CODIGO de creacion de una tabla
SHOW CREATE TABLE Mascotas;

-- el backup atento esto mola!
-- nos salimos de la BD con, para realizar el backup desde fuera:
exit

-- ahora viene lo bueno
-- con el signo ">"" mascotas.sql, indicamos donde queremos guardar el backup en formato .sql.
mysqldump - u usuario -p clinica_veterinaria Mascotas > mascotas.sql

--- para borrar los datos de la tabla truncate para eliminarla un drop
sudo mysql -u usuario -p

DROP TABLE clinica_veterinaria.Mascotas;
TRUNCATE TABLE clinica_veterinaria.Mascotas;

-- podemos entrar en la bd y ahorrar escribir clinica_veterinaria....
use clinica_veterinaria;
DROP TABLE Mascotas;

-- para reestraurar cambiamos el ">" por "<" indicamos que lo "la" quiere meter
mysql -u usuario -p clinica_veterinaria < mascotas.sql


-- sin apuntes de 18:30 a 19:24
-- sin apuntes de 18:30 a 19:24
-- sin apuntes de 18:30 a 19:24
-- sin apuntes de 18:30 a 19:24
-- sin apuntes de 18:30 a 19:24 SQLaaaazo!




-- apuntes fecha sql fechas sql año mes dia date
- day(fecha): retorna el día de la fecha especificada. Ejemplo:
 select day(getdate());

- month(fecha): retorna el mes de la fecha especificada. Ejemplo:
 select month(getdate());

- year(fecha): retorna el año de la fecha especificada. Ejemplo:
 select year(getdate());
 
- datediff(partedelafecha,fecha1,fecha2): calcula el intervalo de tiempo (según el primer argumento) entre las 2 fechas. El resultado es un valor entero que corresponde a fecha2-fecha1. Los valores de "partedelafecha") pueden ser los mismos que se especificaron anteriormente. Ejemplos:
select datediff (day,'2005/10/28','2006/10/28');