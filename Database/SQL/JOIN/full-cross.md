#JOIN

## Creating New Database

	create database joinExtraSQL;

## Creating Table for Employees

	CREATE TABLE Employees (
	    emp_id INT PRIMARY KEY,
	    emp_name VARCHAR(50),
	    salary DECIMAL(10, 2),
	    dept_id VARCHAR(50),
	    manager_id VARCHAR(50),
	);

## Inserting 

	INSERT INTO Employees (emp_id, emp_name, salary, dept_id, manager_id) VALUES
	(1, 'Rahul', 15000, 'D1', 'M1'),
	(2, 'Manoj', 15000, 'D1', 'M1'),
	(3, 'James', 55000, 'D2', 'M2'),
	(4, 'Michael', 25000, 'D2', 'M2'),
	(5, 'Ali', 20000, 'D10', 'M3'),
	(6, 'Robin', 35000, 'D10', 'M3');


## Creating Table

	CREATE TABLE Departments (
	    dept_id VARCHAR(50) PRIMARY KEY,
	    dept_name VARCHAR(50),
		emp_id INT,
		FOREIGN KEY (emp_id) REFERENCES Employees(emp_id)
	);

## Inserting 

	INSERT INTO Departments (dept_id, dept_name) VALUES
	('D1', 'HR'),
	('D2', 'Finance'),
	('D3', 'Engineering'),
	('D4', 'Marketing');

## Creating Table

	CREATE TABLE Managers (
	    manager_id VARCHAR(50) PRIMARY KEY,
	    manager_name VARCHAR(50),
	    dept_id VARCHAR(50),
		emp_id INT,
	    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
	);

## Inserting 

	INSERT INTO Managers (manager_id, manager_name,dept_id) VALUES
	('M1', 'Prem', 'D3'),
	('M2', 'Shripadh', 'D4'),
	('M3', 'Nick', 'D1'),
	('M4', 'Cory', 'D1');


## Creating Table

	CREATE TABLE Projects (
	    project_id INT PRIMARY KEY,
	    project_name VARCHAR(50),
	    team_member_id INT,
	    FOREIGN KEY (team_member_id) REFERENCES Employees(emp_id)
	);
 
## Inserting 

	INSERT INTO Projects (project_id, project_name, team_member_id) VALUES
	(1, 'HR Optimization', 1),
	(2, 'Budget Analysis', 2),
	(3, 'Product Development', 3),
	(4, 'App Testing', 1),
	(5, 'Marketing Campaign', 4);

## Creating Table

	create table Companyy(
		com_id INT primary key,
		com_name varchar(50),
		com_address varchar(100)
	);
 
## Inserting 

	insert into Companyy(com_id, com_name, com_address) values
		(1, 'SoftDev', 'Dhaka');

## View Tables seperately

	SELECT * FROM Employees;
	SELECT * FROM Departments;
	SELECT * FROM Managers;
	SELECT * FROM Projects;

## Inner Join

	select e.emp_name, d.dept_name
	from Employees e
	inner join Departments d
	on e.dept_id = d.dept_id;


## Left join

	select e.emp_name, d.dept_name
	from Employees e
	left join Departments d
	on e.dept_id = d.dept_id;

## Right join

	select e.emp_name, d.dept_name
	from Employees e
	right join Departments d
	on e.dept_id = d.dept_id;


## Full Join

	select e.emp_id, d.dept_name
	from Employees e
	full join Departments d
	on e.dept_id = d.dept_id;


## Cross Join

	select e.emp_id, e.emp_name, d.dept_name
	from Employees e
	cross join Departments d;


## Cross Join

	select e.emp_name, d.dept_name, e.salary, c.com_name, c.com_address
	from Employees e
	inner join Departments d on e.dept_id = d.dept_id
	cross join companyy c;
