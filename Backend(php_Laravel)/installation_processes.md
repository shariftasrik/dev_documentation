Youtube video link for installing XAMPP, Composer and Laravel

    https://youtu.be/yFFXPAOvIic?si=kr4Y-qqYlD_5aunM



<h1>Installations Process </h1>    

<h1>Step 1 : Install XAMPP from </h1>
    
    https://www.apachefriends.org/

<h3>After installing Xampp </h3>
<ol>
    <li>XAMPP Control Panel popup will appear</li>
    <li>Click on <b>Explorer</b> from XAMPP Control Panel</li>
    <li>Find php from that folder and open this and copy that Path (Example : C:\xampp\php)</li>
    <li>Set the to Environment Variable
        <ol>
            <li>Click on Path (User Variable)</li>
            <li>Edit Path and Paste the location (Example: C:\xampp\php)</li>
            <li>Simply click on Ok, Ok...and finish the process</li>
            <li>Open cmd and write {php -- version} </li>
        </ol>
    </li>
</ol>

  <li>Install Composer from https://getcomposer.org/</li>
  <li>Install Laravel from https://laravel.com/</li>




Open Windoes Powershell as administrator :
  
          Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
  
  
  In cmd :
  
          composer global require laravel/installer
          
  For creating new app(backend) using vscode terminal:
  
          cd folder_name
          laravel new app_name 


