Checking which port is working 

    netstat -ano | findstr "LISTENING"


Stopping a port 

      $ netstat -ano | findstr : port_number

<h1>Example</h1>
    -------------------------------------------------------------------------------------------
    | TCP    0.0.0.0:port_number           0.0.0.0:0              LISTENING       PID_Number  |
    -------------------------------------------------------------------------------------------
  
      $ taskkill //PID PID_Number //F
