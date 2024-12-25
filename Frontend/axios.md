<h1>Axios </h1><br/>
	axios knows what is the purpose we're trying to achieve.
	We're trying to reach out from our server to another resource on 	
	the internet and it makes the responses very simple.

------------------------------------------------------------------------------------------------
<h1>Sample axios</h1> 

    import axios from "axios";
    
    app.get("/", async (req,res)=>{
        try {
            const response = await axios.get("https://bored-api.appbrewery.com/random");
            res.render("index.ejs", {activity : response.data});
        }catch (error){
            console.error("Failed to make request: ", error.message);
            res.status(500).send("Failed to fetch activity. Please try again");
        }
    });

------------------------------------------------------------------------------------------------

[Axios makes aliases for all of the most commonly used request methods]

------------------------------------------------------------------------------------------------
<h1>Request method aliases</h1> 

     axios.request(config)
     axios.get(url[,config])
     axios.delete(url[,config])
     axios.head(url[,config])
     axios.options(url[,config])
     axios.post(url[,data[,config]])
     axios.put(url[,data[,config]])
     axios.patch(url[,data[,config]])
     axios.postForm(url[,data[,config]])
     axios.putForm(url[,data[,config]])
     axios.patchForm(url[,data[,config]])



