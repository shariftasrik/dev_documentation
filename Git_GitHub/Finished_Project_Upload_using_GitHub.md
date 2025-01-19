## VS Code project to GitHub


<ol>
  <li>  Go to the project path :
    
        cd /path/to/your/project
  </li>
  <li>  git initlialization :
    
        git init
  </li>
  <li>  Add everything to the git
    
        git add .
  </li>
  <li>  Commit 
    
        git commit -m "Initial commit with project files"
  </li> 
  <br/>
  <li>  Create a new git repository with the same name of the project at GitHub </li><br/>
  <li>  Connect with GitHub Repo
    
        git remote add origin https://github.com/your-username/my-project.git
  </li>
  <li>  Rename the branch name from "master" to "main"
    
        git branch -M main
  </li>
  <li>  Pushing everything in the main branch
    
        git push -u origin main
  </li>
</ol>


## If anything wrong

### Forcefully pushing everything in the main branch

      git push origin main --force
      


## steps to remove previous git init

      rm -rf .git
