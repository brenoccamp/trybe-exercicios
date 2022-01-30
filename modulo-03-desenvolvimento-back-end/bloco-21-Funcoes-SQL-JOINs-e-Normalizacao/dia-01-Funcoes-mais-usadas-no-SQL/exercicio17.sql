SELECT last_name, hire_date FROM hr.employees WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

-- OU --

SELECT last_name, hire_date FROM hr.employees WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';