--//  DIA 1 INSTALACION EN LINUX MINT
sudo apt update

sudo apt upgrade

sudo apt install lamp-server^

sudo service apache2 status

sudo mysql

SELECT user, host FROM mysql.user;

SHOW VARIABLES LIKE "validate_password%";

exit

sudo mysql_secure_installation

y 0 y y y

ctrl + c para salir

sudo mysql

SET GLOBAL validate_password.mixed_case_count = 0;

set global validate_password.special_char_count = 0;

set global validate_password.length = 4;

set global validate_password.number_count = 0;

set global validate_password.special_char_count = 0;

FLUSH PRIVILEGES;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

exit

sudo mysql -u root -p

CREATE USER 'usuario'@'localhost' IDENTIFIED by 'usuario';

GRANT ALL PRIVILEGES ON *.* TO 'usuario'@'localhost' WITH GRANT OPTION;

exit

sudo mysql -u usuario -p

--// FIN DIA 1 INSTALACION EN LINUX MINT







