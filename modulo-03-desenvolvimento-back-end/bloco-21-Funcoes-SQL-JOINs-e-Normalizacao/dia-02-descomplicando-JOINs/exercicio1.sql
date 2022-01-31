SELECT 
    box_office.domestic_sales,
    box_office.international_sales,
    movies.title
FROM
    Pixar.BoxOffice AS box_office
INNER JOIN
	Pixar.Movies AS movies ON box_office.movie_id = movies.id;
    
-- OU COMO ESTÁ NO GABARITO:
USE Pixar;

SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;