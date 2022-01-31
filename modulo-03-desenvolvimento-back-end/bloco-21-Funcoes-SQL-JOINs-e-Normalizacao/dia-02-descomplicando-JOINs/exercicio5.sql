SELEcT * FROM Movies;

SELECT
	T.*,
    M.*
FROM
	Pixar.Theater AS T
RIGHT JOIN
	Pixar.Movies AS M ON M.theater_id = T.id
ORDER BY T.name;
-- OUTRA FORMA DE RESOLVER(GABARITO):
USE Pixar;

SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;