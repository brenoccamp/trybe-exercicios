SELECT COUNT(*) FROM hr.employees WHERE job_id = 'it_prog';
-- OUTRA FORMA DE FAZER ESSA QUERY, PORÉM EXIBINDO A QUANTIDADE DE CADA JOB_ID:
SELECT job_id, COUNT(job_id) FROM hr.employees GROUP BY job_id;