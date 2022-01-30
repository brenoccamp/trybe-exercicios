SELECT UCASE(first_name), UCASE(last_name) FROM hr.employees;
-- OU --
SELECT UPPER(CONCAT(first_name, " ", last_name)) FROM hr.employees