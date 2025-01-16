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

1. Open *XAMPP* Control Panel and start *Apache* and *MySQL*
2. Open you *VS Code* and take a *New Terminal* as *Git Bash*
3. Go to *htdocs* under XAMPP folder

		cd c:
		cd xampp
		cd htdocs
4. Clone the created git repository into this htdocs using *git clone*

		git clone https://github.com/user_name/repo_name.git
  
5. Go the newly cloned folder using VS Code *Terminal*

		cd repo_name
6. Create a new *Laravel* project using *git bash* (it will take some time)

		composer create-project laravel/laravel project_name
7. Go the newly created *Laravel Project* using VS Code *Terminal*

		cd project_name

8. Run the project using this command

		php artisan serve

9. The project will open in a local location

		http://127.0.0.1:8000/

	
