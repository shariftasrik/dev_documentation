Youtube video link for installing XAMPP, Composer and Laravel

<a hreh="https://youtu.be/2qgS_MCvDfk?si=MljfFBpXbNiqnp8Z">Youtube</a>
#install composer <br/>
2. Go to : getcomposer.org
<br/>#(simply next,next, . . . .)
<br/>
#install XAMPP<br/>
3. Go to : https://www.apachefriends.org/<br/>
#(Simply next, next, . . . )<br/>

#install Laravel<br/>
4. Go to : https://laravel.com/

#after goes there, there will be a guideline page for the installing and creating laravel project
  a. Open Windoes Powershell as administrator :
          Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
  a.  in CMD : 
          composer global require laravel/installer
  b.  for creating new app(backend), in vs code terminal(in a folder) : 
          laravel new app_name 


