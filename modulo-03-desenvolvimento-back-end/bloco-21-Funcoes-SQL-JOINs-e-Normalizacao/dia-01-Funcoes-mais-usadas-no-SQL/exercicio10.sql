SELECT 
    department_id, AVG(salary), COUNT(employee_id) AS 'number_of_employees'
FROM
    hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;