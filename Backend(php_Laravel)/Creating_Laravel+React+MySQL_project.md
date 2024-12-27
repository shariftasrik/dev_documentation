<h1>Step 1 : Installations</h1>
<br/>
First install XAMPP,composer,Laravel <br/>
<br/>
Follow this link for the installation process :

    https://github.com/shariftasrik/dev_documentation/blob/main/Backend(php_Laravel)/installation_processes.md

<br/>
<h2>Step 2 : Creating Laravel Project (Backend)</h2>  
<br/>
Open VSCode new Terminal :

    d:
    cd folder_name
    composer global require laravel/installer
    laravel new project_name


<br/>
Note 1 : You can choose any directory<br/>
Note 2 : After entering "laravel new project_name" and then if below things appear,Dont worry !!! <br/><br/>
Note 3 : Simply press Enter . . . <br/> <br/>

       _                               _
      | |                             | |
      | |     __ _ _ __ __ ___   _____| |
      | |    / _` | '__/ _` \ \ / / _ \ |
      | |___| (_| | | | (_| |\ V /  __/ |
      |______\__,_|_|  \__,_| \_/ \___|_|
    
    
     Would you like to install a starter kit? [No starter kit]:
      [none     ] No starter kit
      [breeze   ] Laravel Breeze
      [jetstream] Laravel Jetstream
     >
<br/>
[Simply press "Enter" after the ">" sign ] <br/>
<br/>

<h2>Step 3 : Selecting "Testing Framework"</h2>

     Which testing framework do you prefer? [Pest]:
      [0] Pest
      [1] PHPUnit
     >
<br/>
[Simply press "Enter" after the ">" sign ] <br/>
<br/>

<h2>Step 4 :  Selecting Database</h2>
<br/>

     Which database will your application use? [SQLite]:
      [sqlite ] SQLite
      [mysql  ] MySQL
      [mariadb] MariaDB
      [pgsql  ] PostgreSQL (Missing PDO extension)
      [sqlsrv ] SQL Server (Missing PDO extension)
     >
<br/>   
[Simply press "Enter" after the ">" sign ] <br/>
<br/>

<h2>Step 5 : Finish creating Laravel project</h2>
The Laravel project setup for "project_name" has successfully completed.<br/>
<br/>

<h2>Step 6 :  Setup database from ".env"</h2>
<br/>
<ol>
<li>
    <h3>Default : </h3>
    
        DB_CONNECTION=sqlite
        # DB_HOST=127.0.0.1
        # DB_PORT=3306
        # DB_DATABASE=laravel
        # DB_USERNAME=root
        # DB_PASSWORD=

</li>
<li>
<h3>After Change : </h3>

    DB_CONNECTION=mysql
    # DB_HOST=127.0.0.1
    # DB_PORT=3306
    # DB_DATABASE=laravel
    # DB_USERNAME=root
    # DB_PASSWORD=

</li>
<li>
    
</li>
</ol>
