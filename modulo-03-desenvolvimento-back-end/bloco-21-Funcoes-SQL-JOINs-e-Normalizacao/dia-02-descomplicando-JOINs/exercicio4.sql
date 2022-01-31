SELECT
	T.*,
    M.*
FROM
	Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M ON  T.id = M.theater_id
ORDER BY T.name;
 -- OU COMO ABAIXO (RESPOSTA DO GABARITO) SEM A COLUNA ID
USE Pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;