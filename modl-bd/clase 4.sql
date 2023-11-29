

--1.Calcula la duración promedio de los cursos.
SELECT AVG(duration) AS average_duration FROM Courses;

--2.Obtener la cantidad de cursos que ha realizado el alumno con Id = 1;
SELECT COUNT(c.) AS courses_count FROM Enrollments WHERE student_id = 1;

--3.Obtener la cantidad de cursos que ha realizado el alumno 'Jhon';
SELECT COUNT(c.) AS courses_count FROM Enrollments e INNER JOIN Students s ON e.student_id = s.student_id WHERE s.first_name = 'John';

--4.Obtén el nombre completo en un alias y el correo electrónico de todos los estudiantes que hagan un curso de turno de mañana;
SELECT CONCAT (s.first_name, ' ', s.last_name) AS Alias, s.email FROM Students s INNER JOIN Enrollments e ON e.student_id = s.student_id INNER JOIN Courses c ON c.course_id = e.course_id WHERE c.schedule = 'Morning';

--5.Obtén el precio medio (sin decimales) concatenado con el símbolo “€” de todos los cursos.
SELECT CONCAT(ROUND(AVG(*)),' €') AS rounded_average FROM Courses; 

--6.Encuentra el número total de estudiantes matriculados en cada curso ordenados de mayor a menor
SELECT COUNT(student_id) AS total_counter, course_id FROM Enrollments GROUP BY course_id ORDER BY total_counter DESC;

-----------------------------------------------------------------
--Obtener el nombre y apellidos de los estudiantes que se han matriculado en algún curso de nivel "Advanced".

SELECT s.first_name, s.last_name 
FROM Students s 
INNER JOIN Courses c ON c.student_id = s.student_id 
WHERE c.difficulty = 'Advanced';

--Mostrar los cursos en orden ascendente según su precio:

SELECT course_name, price 
FROM Courses 
ORDER BY price ASC;

--Obtener los nombres de los estudiantes y los cursos en los que están inscritos, ordenados por el nombre del curso:

SELECT s.first_name, s.last_name, c.course_name
FROM Students
INNER JOIN Enrollments e ON s.student_id = e.student_id
INNER JOIN Courses c ON e.course_id = c.course_id
ORDER BY c.course_name DESC;

--Mostrar el nombre y la cantidad de cursos de cada dificultad, ordenados por la cantidad de cursos de manera descendente:

SELECT difficulty, COUNT(course_id) AS course_count
FROM Courses 
GROUP BY difficulty
ORDER BY course_count DESC;

--Obtener el precio medio de los cursos por horario
SELECT c.schedule, ROUND(AVG(c.price)) FROM Courses c GROUP BY c.schedule

--Obtén el curso más antiguo
(
SELECT e.course_id, e.year_enrolled
FROM Enrollments e
ORDER BY e.year_enrolled ASC
LIMIT 1
)
UNION
(
SELECT e.course_id, e.year_enrolled  
FROM Enrollments e
ORDER BY e.year_enrolled DESC
LIMIT 1
)

--Obtener el gasto de cada uno de los alumnos, es decir, la suma total del precio de los cursos en los que se ha matriculado .
SELECT s.first_name, SUM(c.price) as totalPagado 
FROM Students s
INNER JOIN Enrollments e ON e.student_id = s.student_id
INNER JOIN Courses c ON c.course_id = e.course_id
GROUP BY s.first_name

-- como lo hacia antes del bootcamp, metia los ON dentro del WHERE y la llamada a la tabla a unir en el FROM
SELECT s.first_name, SUM(c.price) as totalPagado 
FROM Students s, Enrollments e, Courses c
WHERE e.student_id = s.student_id AND c.course_id = e.course_id 
GROUP BY s.first_name

-- INNER JOIN Enrollments e ON e.student_id = s.student_id
-- INNER JOIN Courses c ON c.course_id = e.course_id
-- GROUP BY s.first_name