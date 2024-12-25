Youtube video link for installing XAMPP, Composer and Laravel

    https://youtu.be/2qgS_MCvDfk?si=MljfFBpXbNiqnp8Z"



<h1>Installations</h1>    

<ol>
  <li>Install php from https://www.php.net/downloads.php
    <ol>
      <li>Click on : Windows downloads</li>
      <li>Find Zip : VS17 x64 Thread Safe</li>
    </ol>
  </li>
  <li>Install Composer from https://getcomposer.org/</li>
  <li>Install XAMPP from https://www.apachefriends.org/</li>
  <li>Install Laravel from https://laravel.com/</li>
</ol>



#after goes there, there will be a guideline page for the installing and creating laravel project
  a. Open Windoes Powershell as administrator :
          Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
  
  
  In CMD :
  
          composer global require laravel/installer
          
  For creating new app(backend):
  
  In vscode terminal(in a folder) : 
  
          laravel new app_name 


