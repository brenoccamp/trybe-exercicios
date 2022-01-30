SELECT 
    ROUND(MAX(salary), 2),
    ROUND(MIN(salary), 2),
    ROUND(SUM(salary), 2),
    ROUND(AVG(salary), 2)
FROM
    hr.employees;