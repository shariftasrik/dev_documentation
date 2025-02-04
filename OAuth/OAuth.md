# What exactly is special about OAuth?

There's a lot of other open standards that does something similar to this, but OAuth is quite special in three ways.
<ol>
  <li><i>Granular Level</i> of Access.</li>
  <li><i>Read-only</i> or <i>Read-and-Write</i> access.</li>
  <li>The third party <i>Revoke</i> Access.</li>
</ol>

# How does OAuth actually works?

### Steps :
<ol>
  <li> Set up your App </li>
  <li> Redirect to Authenticate </li>
  <li> Users Login </li>
  <li> Users Grant Permissions </li>
  <li> Receive Authorization Code </li>
  <li> Exchange AuthCode for Access Token</li>
</ol>

# Set up your App
<ol>
  <li> Create a project in your google console account</li>
  <li> Copy the Client Id and Client Secret</li>
  <li> Make variables of the Client Id and Client Secret in .env file and paste them accordingly</li>
  <li> Go to index.js of your project where you make connect all the external things</li>
  <li> Again "npm i" in the terminal</li>
  <li> import GoogleStrategy from "passport-google-oauth2"; in index.js</li>
  <li> Paste this after the first use of passport 

      passport.use("google", new GoogleStrategy({
        clientID : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL : "http://localhost:3000/auth/google/secrets",
        userProfileURL : "https://www.googleapis.com/oauth2/v3/userinfo",
    }))
  
  </li>
  <li> </li>
  <li> </li>
  <li> </li>
  <li> </li>
  <li> </li>
</ol>

  
</ol>
