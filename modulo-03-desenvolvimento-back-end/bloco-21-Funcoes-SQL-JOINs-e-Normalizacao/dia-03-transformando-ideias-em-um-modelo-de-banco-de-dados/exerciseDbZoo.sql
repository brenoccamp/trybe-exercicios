DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA zoo;

CREATE TABLE zoo.animals (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    specie VARCHAR(30) NOT NULL,
    sex VARCHAR(8) NOT NULL,
    age DOUBLE NOT NULL,
    location VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE zoo.managers (
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(40) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE zoo.caregivers (
	caregiver_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES zoo.managers(manager_id)
) ENGINE=InnoDB;

CREATE TABLE zoo.animal_caregiver (
	caregiver_id INT,
    animal_id INT,
    FOREIGN KEY (caregiver_id) REFERENCES zoo.caregivers(caregiver_id),
    FOREIGN KEY (animal_id) REFERENCES zoo.animals(animal_id)
) ENGINE=InnoDB;
    