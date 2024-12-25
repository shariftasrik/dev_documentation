Youtube video link for installing XAMPP, Composer and Laravel

    https://youtu.be/2qgS_MCvDfk?si=MljfFBpXbNiqnp8Z"



<h1>Installations</h1>    

<ol>
<li>Install XAMPP from https://www.apachefriends.org/</li>
    <p>
        After installing Xampp,
        <ol>
            <li>XAMPP Control Panel popup will appear</li>
            <li>Click on Explorer (Then explorer will open at XAMPP folder)</li>
            <li>Find php from that folder and open this and copy that Path (Example : C:\xampp\php)</li>
            <li>Go to Environment Variable
                <ol>
                    <li>Click on Path (User Variable)</li>
                    <li>Edit Path</li>
                    <li>Paste the location (Example: C:\xampp\php)</li>
                    <li>Simply click on Ok, Ok... 
                        <ul>
                            <li>Open cmd</li>
                            <li>php --version</li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ol>
    </p>
  <li>Install Composer from https://getcomposer.org/</li>
  <li>Install Laravel from https://laravel.com/</li>
</ol>



Open Windoes Powershell as administrator :
  
          Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
  
  
  In cmd :
  
          composer global require laravel/installer
          
  For creating new app(backend) using vscode terminal:
  
          cd folder_name
          laravel new app_name 


