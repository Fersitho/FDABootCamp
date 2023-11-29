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


CREATE TABLE Courses (     course_id INT AUTO_INCREMENT,     course_name VARCHAR(100) NOT NULL,     price DECIMAL(10, 2) NOT NULL,     duration VARCHAR(50),     schedule VARCHAR(50),     difficulty VARCHAR(20),     PRIMARY KEY (course_id) ); 

CREATE TABLE Students (     student_id INT AUTO_INCREMENT,     first_name VARCHAR(50) NOT NULL,     last_name VARCHAR(50) NOT NULL,     dni VARCHAR(20) NOT NULL,     phone VARCHAR(20),     email VARCHAR(100),     date_of_birth DATE,     PRIMARY KEY (student_id) ); 

CREATE TABLE Enrollments (     enrollment_id INT AUTO_INCREMENT,     student_id INT,     course_id INT,     year_enrolled INT,     PRIMARY KEY (enrollment_id),     FOREIGN KEY (student_id) REFERENCES Students(student_id) ON DELETE CASCADE ON UPDATE CASCADE,     FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE ON UPDATE CASCADE ); 

INSERT INTO Courses (course_name, price, duration, schedule, difficulty) VALUES     ('Mathematics', 99.99, '3', 'Morning', 'Intermediate'),     ('English Grammar', 129.99, '6', 'Afternoon', 'Advanced'),     ('Computer Science', 149.99, '4', 'Evening', 'Intermediate'),     ('Art History', 79.99, '2', 'Morning', 'Beginner'),     ('Physics', 119.99, '5', 'Evening', 'Advanced'),     ('Chemistry', 109.99, '3', 'Afternoon', 'Intermediate'),     ('Computer Science', 89.99, '4', 'Morning', 'Beginner'),     ('Literature', 69.99, '2', 'Evening', 'Intermediate'),     ('History', 99.99, '6', 'Morning', 'Advanced'),     ('Computer Science', 79.99, '5', 'Afternoon', 'Beginner'); 

INSERT INTO Students (first_name, last_name, dni, phone, email, date_of_birth) VALUES     ('John', 'Doe', '123456789A', '555-1234', 'john@example.com', '1998-05-10'),     ('Jane', 'Smith', '987654321B', '555-5678', 'jane@example.com', '2000-02-15'),     ('Michael', 'Johnson', '456789012C', '555-2468', 'michael@example.com', '1997-09-22'),     ('Emma', 'Brown', '789012345D', '555-1357', 'emma@example.com', '1999-11-30'),     ('Daniel', 'Taylor', '234567890E', '555-9876', 'daniel@example.com', '2001-07-05'),     ('Olivia', 'Lee', '345678901F', '555-5432', 'olivia@example.com', '1995-04-18'),     ('William', 'Wilson', '678901234G', '555-7890', 'william@example.com', '1996-12-25'),     ('Sophia', 'Anderson', '890123456H', '555-4321', 'sophia@example.com', '1994-10-31'),     ('Matthew', 'Davis', '567890123I', '555-2109', 'matthew@example.com', '2002-08-08'),     ('Isabella', 'Clark', '012345678J', '555-8765', 'isabella@example.com', '2003-03-17');

INSERT INTO Enrollments (student_id, course_id, year_enrolled) VALUES     (1, 2, 2023),     (2, 1, 2021),     (3, 3, 2022),     (4, 4, 2021),     (5, 5, 2023),     (6, 6, 2020),     (7, 7, 2018),     (8, 8, 2021),     (9, 9, 2013),     (10, 10, 2023),     (1, 3, 2023),     (2, 4, 2022),     (3, 5, 2021),     (4, 6, 2023),     (5, 7, 2022),     (6, 8, 2021),     (7, 9, 2023),     (8, 10, 2022),     (9, 1, 2021),     (10, 2, 2023),     (5, 3, 2022),     (8, 6, 2020),     (10, 4, 2023),     (3, 8, 2021),     (6, 9, 2022),     (2, 5, 2023),     (7, 7, 2020),     (9, 2, 2021),     (1, 10, 2023),     (4, 1, 2022);


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












