SELECT
	M.*,
    B.rating
FROM
	Pixar.Movies AS M
INNER JOIN
	Pixar.BoxOffice AS B ON B.movie_id = M.id
WHERE B.rating > 8;
-- OU DESSE OUTRO MODO (GABARITO):
USE Pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;