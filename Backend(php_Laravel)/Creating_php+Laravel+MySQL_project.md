# Creating a new php + Laravel + mySQL project

## Step 1 : Installations

First install XAMPP,composer,Laravel <br/>
<br/>
Follow this link for the installation process :

    https://github.com/shariftasrik/dev_documentation/blob/main/Backend(php_Laravel)/installation_processes.md

<br/>

## Step 2 : Create Git Repository

1. Create new git repository in *GitHub* for your project

  		project_name


## Step 3 : Create Laravel Project

1. Open *XAMPP* Control Panel 
2. Start *Apache* and Start *MySQL*
3. Open you *VS Code* and take a *New Terminal* as *Git Bash*
4. Go to *htdocs* under XAMPP folder

		cd c:
		cd xampp
		cd htdocs
5. Clone the created git repository into this htdocs using *git clone*

		git clone https://github.com/user_name/repo_name.git
  
6. Go the newly cloned folder using VS Code *Terminal*

		cd repo_name
7. Create a new *Laravel* project using *git bash* (it will take some time)

		composer create-project laravel/laravel project_name
8. Go the newly created *Laravel Project* using VS Code *Terminal*

		cd project_name

9. Run the project using this command

		php artisan serve

10. The project will open in a local location

		http://127.0.0.1:8000/

## Database Setup

1. Write the command in you web browser and *Enter* then it will show a new page Like this

		localhost/dashboard/

	<br/>
![localhost-dashboard](https://github.com/user-attachments/assets/242259df-768f-4e84-82d0-3e6470c703e4)
	<br/>



 2. Click on phpMyAdmin and it will take you to and click on Databse from that page

    		http://localhost/phpmyadmin/

	<br/>
![localhost-phpnyadmin](https://github.com/user-attachments/assets/b22d5d9d-561a-4a61-a35d-322e4c23ec1e)
	<br/>

3. Create new database with a Name like *database_name*

![Create-Database](https://github.com/user-attachments/assets/eb2cd055-839e-4bae-ade0-e4971052d578)

4. Go to *VS Code*
