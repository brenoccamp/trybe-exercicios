    USE model_example;
    CREATE TABLE books (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(90) NOT NULL,
        author_id INT(11) NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (author_id) REFERENCES authors (id)
    );

    INSERT INTO books (title, author_id)
    VALUES
        ('A Game of Thrones', 1),
        ('A Clash of Kings', 1),
        ('A Storm of Swords', 1),
        ('The Lord of The Rings - The Fellowship of the Ring', 2),
        ('The Lord of The Rings - The Two Towers', 2),
        ('The Lord of The Rings - The Return of The King', 2),
        ('Foundation', 3);
