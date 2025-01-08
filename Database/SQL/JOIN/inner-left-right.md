drop table Employee;
drop table Department;
drop table Manager;
drop table Project;

create database joinSQL;

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    salary DECIMAL(10, 2),
    dept_id INT,
    manager_id INT,
	
	--FOREIGN KEY (dept_id) REFERENCES Department(dept_id),
    
	--FOREIGN KEY (manager_id) REFERENCES Manager(manager_id)
);

INSERT INTO Employee (emp_id, emp_name, salary, dept_id, manager_id) VALUES
(1, 'Ethan Ray', 50000.00, 1, 1),
(2, 'Sophia White', 60000.00, 2, 2),
(3, 'Liam Green', 55000.00, 3, 3),
(4, 'Mia Brown', 52000.00, 3, 3),
(5, 'Oliver Black', 45000.00, 4, 4),
(6, 'Ava Blue', 48000.00, 4, 4);

INSERT INTO Employee (emp_id, emp_name, salary, dept_id, manager_id) VALUES
(7, 'Ali', 52000.00, 7, 5),
(8, 'James', 45000.00, 9, 6),
(9, 'Robin', 48000.00, 10, 7);


CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50),
	emp_id INT,
	FOREIGN KEY (emp_id) REFERENCES Employee(emp_id)
);

INSERT INTO Department (dept_id, dept_name, emp_id) VALUES
(1, 'HR',2),
(2, 'Finance',3),
(3, 'Engineering',1),
(4, 'Marketing',5);

CREATE TABLE Manager (
    manager_id INT PRIMARY KEY,
    manager_name VARCHAR(50),
    dept_id INT,
	emp_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

alter table Manager
add emp_id INT;

alter table Manager
add constraint fk_manager_emp
foreign key (emp_id) references Employee(emp_id);

INSERT INTO Manager (manager_id, manager_name,dept_id) VALUES
(1, 'Alice Johnson', 1),
(2, 'Bob Smith', 2),
(3, 'Charlie Brown', 3),
(4, 'Diana Prince', 4);


UPDATE Manager
SET emp_id = 1
WHERE manager_id = 1;

UPDATE Manager
SET emp_id = 2
WHERE manager_id = 2;

UPDATE Manager
SET emp_id = 3
WHERE manager_id = 3;

UPDATE Manager
SET emp_id = 4
WHERE manager_id = 4;

INSERT INTO Manager (manager_id, manager_name,dept_id, emp_id) VALUES
(5, 'Alson',2, 8),
(6, 'Smith',1, 5),
(7, 'Crown', 3, 7),
(8, 'Prince',4, 6);


CREATE TABLE Project (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(50),
    team_member_id INT,
    FOREIGN KEY (team_member_id) REFERENCES Employee(emp_id)
);

INSERT INTO Project (project_id, project_name, team_member_id) VALUES
(1, 'HR Optimization', 1),
(2, 'Budget Analysis', 2),
(3, 'Product Development', 3),
(4, 'App Testing', 4),
(5, 'Marketing Campaign', 5);


SELECT * FROM Employee;
SELECT * FROM Department;
SELECT * FROM Manager;
SELECT * FROM Project;


/* INNER JOIN

Syntax : 

  SELECT column1, column2
  FROM table1
  INNER JOIN table2
  ON table1.common_column = table2.common_column;

  Inner Join = Fetch the matcing records only, from the both Table

*/


-- Example : Inner Join
select e.emp_name, d.dept_name
from Employee e
Inner Join Department d
on e.dept_id = d.dept_id;


/* LEFT JOIN

Syntax : 

  SELECT column1, column2
  FROM table1
  LEFT JOIN table2
  ON table1.common_column = table2.common_column;


  Left Join = Inner Join + Additional records in the left Table

*/

-- Example : Left Join
select e.emp_name, d.dept_name
from Employee e
left Join Department d
on e.dept_id = d.dept_id;



/* RIGHT JOIN

Syntax : 

  SELECT column1, column2
  FROM table1
  RIGHT JOIN table2
  ON table1.common_column = table2.common_column;


  Right Join = Inner Join + Additional records in the right Table

*/

-- Example : Left Join
select e.emp_name, d.dept_name
from Employee e
right Join Department d
on e.dept_id = d.dept_id;


-- Fetch details of All employees, their manager, their department and the projects they work on
select e.emp_id, e.emp_name, e.salary, d.dept_name, m.manager_name, p.project_name
from Employee e
left join Department d on e.emp_id = d.dept_id
join Manager m on m.manager_id = e.emp_id
left join Project p on p.team_member_id = e.emp_id;
