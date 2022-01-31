SELECT
	M.title,
    (B_Off.international_sales + B_Off.domestic_sales) AS 'Total Sales'
FROM
	Pixar.Movies AS M
INNER JOIN
	Pixar.BoxOffice AS B_Off ON M.id = B_Off.movie_id
WHERE B_Off.international_sales > B_Off.domestic_sales;