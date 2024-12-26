Checking which port is working 

    netstat -ano | findstr "LISTENING"


Stopping a port 

      $ netstat -ano | findstr : port_number

<h1>Example</h1>
<table>
  <tr>
    <th>TCP</th>
    <th>0.0.0.0:port_number</th>
    <th>0.0.0.0:0  </th>
    <th>LISTENING</th>  
    <th>PID_Number</th>
  </tr>
  <tr>
    <td>TCP</th>
    <td>0.0.0.0:5000</th>
    <td>0.0.0.0:0 </th>
    <td>LISTENING</th>  
    <td>12345 </th>
  </tr>
  <tr>
    <td>TCP</th>
    <td>127.0.0.1:3306</td>
    <td>0.0.0.0:0 </td>
    <td>LISTENING</td>  
    <td>23456</td>
  </tr>
  <tr>
    <td>TCP</th>
    <td>192.168.1.100:80 </td>
    <td>203.0.113.5:12345</td>
    <td>ESTABLISHED</td>  
    <td>34567</td>
  </tr>
</table>



<h1>Checking using cmd </h1>
  
      $ taskkill //PID PID_Number //F

For closing any port (for Windows) :
   1. Using gitBash:
        
          netstat -ano | findstr :3000
          taskkill /PID <PID number> /F
      
   3. Using Task Manager
        1. Open Task Manager (Ctrl + Shift + Esc).
        2. Look for the process that is using port 3000 (often a Node.js or other development server).
        3. Right-click the process and select "End Task".

