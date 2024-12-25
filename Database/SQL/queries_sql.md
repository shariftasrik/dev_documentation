Select Data

    SELECT * FROM table_name;
    SELECT column1, column2 FROM table_name;

Insert Data

    INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');

Update Data

    UPDATE table_name SET column1 = 'new_value' WHERE condition;

Delete Data
    
    DELETE FROM table_name WHERE condition;

Create Table

    CREATE TABLE table_name (
        id INT PRIMARY KEY AUTO_INCREMENT,
        column1 VARCHAR(50),
        column2 INT
    );

Drop Table
  
    DROP TABLE table_name;

Alter Table

    ALTER TABLE table_name ADD column_name datatype;
    ALTER TABLE table_name MODIFY column_name new_datatype;
    ALTER TABLE table_name DROP COLUMN column_name;



<h1>Filtering and Conditions</h1>

Where Clause

    SELECT * FROM table_name WHERE column1 = 'value';
    SELECT * FROM table_name WHERE column2 > 100;

AND/OR Conditions

    SELECT * FROM table_name WHERE column1 = 'value' AND column2 > 100;
    SELECT * FROM table_name WHERE column1 = 'value' OR column2 < 50;
    
IN and BETWEEN

    SELECT * FROM table_name WHERE column1 IN ('value1', 'value2', 'value3');
    SELECT * FROM table_name WHERE column2 BETWEEN 10 AND 20;


LIKE and Wildcards

    SELECT * FROM table_name WHERE column1 LIKE 'A%';  -- Starts with 'A'
    SELECT * FROM table_name WHERE column1 LIKE '%A';  -- Ends with 'A'
    SELECT * FROM table_name WHERE column1 LIKE '%A%'; -- Contains 'A'

<h1>Aggregation</h1>

Count, Sum, Average, Min, Max

    SELECT COUNT(*) FROM table_name;
    SELECT SUM(column2) FROM table_name;
    SELECT AVG(column2) FROM table_name;
    SELECT MIN(column2) FROM table_name;
    SELECT MAX(column2) FROM table_name;


Group By

    SELECT column1, COUNT(*) FROM table_name GROUP BY column1;

Having Clause (Filter aggregated results)

    SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING COUNT(*) > 1;

<h1>Joins</h1>

Inner Join

    SELECT t1.column1, t2.column2
    FROM table1 t1
    INNER JOIN table2 t2 ON t1.common_column = t2.common_column;


Left Join

    SELECT t1.column1, t2.column2
    FROM table1 t1
    LEFT JOIN table2 t2 ON t1.common_column = t2.common_column;


Right Join

    SELECT t1.column1, t2.column2
    FROM table1 t1
    RIGHT JOIN table2 t2 ON t1.common_column = t2.common_column;

Full Outer Join

    SELECT t1.column1, t2.column2
    FROM table1 t1
    FULL OUTER JOIN table2 t2 ON t1.common_column = t2.common_column;

<h1>Subqueries</h1>

Basic Subquery

    SELECT column1 FROM table_name WHERE column2 = (SELECT MAX(column2) FROM table_name);

Subquery with IN

    SELECT column1 FROM table_name WHERE column2 IN (SELECT column2 FROM another_table);

<h1>Indexing</h1>

Create Index

    CREATE INDEX index_name ON table_name (column1);

Drop Index

    DROP INDEX index_name;


<h1>Transactions</h1>

    START TRANSACTION;

Commit 

    COMMIT;

Rollback

    ROLLBACK;

<h1>Advanced Queries</h1>

    SELECT column1 FROM table1
    UNION
    SELECT column1 FROM table2;



    SELECT column1,
           CASE
               WHEN column2 > 100 THEN 'High'
               WHEN column2 BETWEEN 50 AND 100 THEN 'Medium'
               ELSE 'Low'
           END AS category
    FROM table_name;

    
    SELECT * FROM table_name LIMIT 10 OFFSET 20;

<h1>Backup and Restore</h1>

Backup Database (MySQL)
      
      mysqldump -u username -p database_name > backup.sql

Restore Database

    mysql -u username -p database_name < backup.sql

<h1>Permissions</h1>

      GRANT ALL PRIVILEGES ON database_name.* TO 'user'@'localhost' IDENTIFIED BY 'password';
      REVOKE ALL PRIVILEGES ON database_name.* FROM 'user'@'localhost';
      SHOW GRANTS FOR 'user'@'localhost';
