<h1>Installations Process </h1>    

<h2>Step 1 : Install XAMPP from </h2>
    
    https://www.apachefriends.org/

<h3>After installing Xampp </h3>

        1. XAMPP Control Panel popup will appear<br/>
        2. Click on <i><u>Explorer</u></i> from XAMPP Control Panel<br/>
        3. Find php from that folder and open this and copy that Path (Example : <i>C:\xampp\php </i>)<br/>
        4. Set the to Environment Variable<br/>


## Step 2 :Install nodejs

    nodejs.org/en/download

--------------------------------------------------------------------------------------------------------------------
<h3>Process for setting up Environment Variable <i>env</i></h3>

        1. Click on Path (User Variable)
        2. Edit Path and Paste the location (Example: C:\xampp\php)
        3. Simply click on Ok, Ok...and finish the process
        4. Open cmd and write ( php -- version ) and then Enter 

</li>


--------------------------------------------------------------------------------------------------------------------
<h2>Step 3 : Install Composer from </h2>

    https://getcomposer.org/

<h3>Process : </h3>
        
        1. Copy and paste the link in the Browser
        2. Click On <b>Download</b> and then Click on <i>Composer-Setup.exe</i>
        3. Then simply click Ok and Next and Finish the process



--------------------------------------------------------------------------------------------------------------------
<h2>Step 4 : Install Laravel from </h2>

     Install Laravel from https://laravel.com/

<h3>Process : </h3>

        1. Copy and paste the link in the Browser
        2. Click On <b>GET STARTED</b> Then Scroll down
        3. We fill find a block called "Installing PHP and the Laravel Installer command"
    
            composer global require laravel/installer
            
        4. Open CMD and copy/paste the command and press Enter
        5. After installation check the Laravel version using CMD
            
            laravel --version





--------------------------------------------------------------------------------------------------------------------
<h2>Creating new App(backend) using vscode terminal</h2> 
  
          cd folder_name
          laravel new app_name 

          
--------------------------------------------------------------------------------------------------------------------
<h2>Open Windoes Powershell as administrator [Mannual Process for installing php]</h2>
  
          Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
          

--------------------------------------------------------------------------------------------------------------------
<h1>Youtube video link for installing XAMPP, Composer and Laravel</h1>

    https://youtu.be/yFFXPAOvIic?si=iiYhxi8VB81axANo

