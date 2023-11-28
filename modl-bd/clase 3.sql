--1 Mostrar el nombre y apellido de los usuarios cuyo nombre contenga la letra 'a' y su apellido termine en 'son':
SELECT CONCAT(name,' ',last_name) AS nombre_completo FROM Users WHERE user_id=1;

--2 Obtened el nombre y apellido concatenados con un alias del usuario con Id = 1



--3 Ahora vamos a insertar una nueva columna llamada "sexo" que sea de tipo ENUM con los valores (M, F).

ALTER TABLE Users ADD COLUMN sexo ENUM('M','F') DEFAULT 'M';

--4 Después, vamos a mover la columna "sexo" después de la columna "name".

ALTER TABLE Users MODIFY COLUMN sexo ENUM('M','F') AFTER name;

--5 Vamos a cambiar el nombre de la columna sexo a "gender".

ALTER TABLE Users CHANGE COLUMN sexo gender ENUM('M','F');

ALTER TABLE Users RENAME sexo TO gender;


-- phpadmin
sudo mysql -u root -p
uninstall component "file://component_validate_password";

exit

sudo apt install phpmyadmin

-- elegir 
apache2 todo que sí
contraseña 12345678


install component "file://component_validate_password";

sudo phpenmod mbstring

sudo systemctl restart apache2

-- podemos abrir en la web: http://localhost/phpmyadmin
-- si falla en localhost/phpmyadmin --> 
sudo nano /etc/apache2/apache2.conf
--en el archivo añadir debajo de Include ports.conf
Include /etc/phpmyadmin/apache2.conf

sudo systemctl restart apache2



-- ejer 
--Mostrar los nombres y correos electrónicos de todos los estudiantes:
 SELECT first_name,email FROM Students;
--Obtener los cursos y sus precios mayores a $80:
 SELECT * FROM Courses WHERE price > 80;
--Mostrar los cursos en los que la duración sea de 4 meses:
 SELECT * FROM Courses WHERE duration = 4;
--Mostrar los estudiantes que han nacido en el 1998:
 SELECT * FROM Students WHERE year(date_of_birth) = 1998;
--Seleccionar los alumnos cuyo nombre empieza por 'J':
 SELECT * FROM Students WHERE first_name LIKE 'J%';
--Mostrar los alumnos cuyo número de DNI contiene '12':
 SELECT * FROM Students WHERE dni LIKE '%12%';

-- nos saca s.first_name, s.last_name de student, con el student_id que existen en enrrolments matriculas de esas, "es decir que el alumno tiene que exsitir en errolent" nos quedamos con las del año 2021
SELECT s.first_name, s.last_name 
FROM Students s 
INNER JOIN Enrollments e ON e.student_id = s.student_id 
WHERE e.year_enrolled = 2021;


SELECT DISTINC --> nos quita duplicados quitar duplicado doble


SELECT s.first_name, s.last_name 
FROM Students s 
INNER JOIN Enrollments e ON e.student_id = s.student_id
INNER JOIN Courses c ON c.course_id = e.course_id; 

-- Obtener el nombre y apellidos de los estudiantes matriculados en el curso de "Computer Science".

SELECT s.first_name, s.last_name FROM Students s 
INNER JOIN Courses c ON c.course_name = "Computer Science"
INNER JOIN Enrollments e ON e.student_id = s.student_id 
WHERE c.course_id = e.course_id

-- Calcula la duración promedio de los cursos.

SELECT AVG(duration) AS duracion_promedio FROM Courses;












