<h1>Step 1 (Using git bash) : </h1>
<ol>
  <li>Open git bash</li>

    touch .bash_profile .bashrc    
</ol>
    Note: (create two file named ".bash_profile" and ".bashrc")
 

------------------------------------------------------------------------------------

<h1>Step 2(Using Browser) : </h1>

<ol>
  <li>Search "Nvm windows" & scroll down</li>
  <li>click on "nvm" && and again scroll down</li>
  <li>click "installing and updating"</li>
  <li>copy the link as same as below</li>
  
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
</ol>       

<h1>Step 3 (Using git bash) : </h1>

     code . .bashrc 
    
  Note : It will take you to vs code and open the file named ".bashrc"
  
    code . .bash_profile 
    
  Note : It will take you to the file at vs code named ".bash_profile")
  
  Copy and paste the below lines into ".bash_profile":
  
      test -f~/.profile && . ~/.profile
      test -f~/.bashrc && . ~/.bashrc

Note : in that file of vs code 
    
      ctrl+s 

<h1>Step 5 (Close git bash and reopen it) :</h1>

      nvm
      
      nvm install --lts
      
      node -v

<h1>Step 6 (Close git bash and reopen it) :</h1>

    2. pwd
    3. cd d:
    4. mkdir node_day_1
    5. cd node_day_1/
    6. code . (direct vs code e niye jabe)
    7. create index.js file under node_day_1 in (vs code)
    8. then go to git bash again:
    9. ls
    10. node index.js
    11. npx create-react-app day1_react_app
        (then some packages will start to install under npm and finally it will show "Happy hacking!")

Step 7:

     1. Open thaka git bash kete diye abaro notun kore open korte hbe
     2. pwd
     3. cd D:
     4. cd node_day_1
     5. cd day1_react_app/ (it will take you to "/d/node_day_1/day1_react_app (master)" )
     6. npm start (it will complie and take you to the browser and open a new tab name "React App")



Way to find package.json:
in vs code, if we expand "day1_react_app" there will be found some files 
expand : src (then you will find)
app.js (click on it)


for carousel
npm install react-responsive-carousel


for closing any port (for Windows) :
     1. Using gitBash:
          1. netstat -ano | findstr :3000
          2. taskkill /PID <PID number> /F
     2. Using Task Manager
          1. Open Task Manager (Ctrl + Shift + Esc).
          2. Look for the process that is using port 3000 (often a Node.js or other development server).
          3. Right-click the process and select "End Task".
