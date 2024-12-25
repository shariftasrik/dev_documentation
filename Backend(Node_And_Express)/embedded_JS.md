Start Using EJS (Embedded JS) :

<ol>
	
<li>Create a new folder called "4.0 EJS".</li>

<li>Initialize NPM and install Express and ejs</li>
	   
	   npm init -y
	   npm i express ejs
     
<li>Create the following files and folders</li>

	mkdir views 
	touch index.js 
	views/index.ejs
<li>Use the JS getDay() method to build a website that gives advice based on the day of the week.</li>
</ol>

	      

--------------------------------------------------------------------------------------------------------------------------------------------

Different EJS Tags :

<ol>
<li>JS output (value of the variable)</li>
	
	<%= variable %> 
<li>JS Execute (only execution but not showing the output)</li>
	
 	<% console.log("Hello") %>
<li>Render HTML (shows the html structure of the code which is under the starting and closing tag)</li>
	
 	<%- <h1>Hello</h1> %>  
<li>excape EJS tag (show <% or %>)</li>
		
	<%% %%>  
<li>stop execution (commen out something)</li>
	
 	<%# This is a comment %> 
<li> insert another file</li>
	
 	<%- include("<FILE NAME")%> 
  <ul>
	  <li>(Example) : insert another EJS file</li>
		
	  	<%- include("header.ejs")%>
   
  </ul>
</ol>
