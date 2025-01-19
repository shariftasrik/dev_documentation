## VS Code project to GitHub

<ol>
  <li>  cd /path/to/your/project</li>
  <li>  git init</li>
  <li>  git add .</li>
  <li>  git commit -m "Initial commit with project files"</li> <br/>
  <li>  Create a new git repository with the same name of the project at GitHub </li><br/>
  <li>  git remote add origin https://github.com/your-username/my-project.git</li>
  <li>  git branch -M main</li>
  <li>  git push -u origin main</li>
</ol>


## If anything wrong

### Force Push (If You Want to Overwrite Remote)  

      git push origin main --force
      
### steps to remove previous git init

      rm -rf .git
