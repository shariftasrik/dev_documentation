# Login Form Added

## Step 1. 
go to bootstrap official website

		https://getbootstrap.com/
## Step 2. 
copy bootstrap CDN link and paste it into login.blade.php file after then title attribute

		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


## Step 3. 
copy and paste a login form from bootstrap form section documentation
   
		<form>
		  <div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label">Email address</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
		    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Password</label>
		    <input type="password" class="form-control" id="exampleInputPassword1">
		  </div>
		  <div class="mb-3 form-check">
		    <input type="checkbox" class="form-check-input" id="exampleCheck1">
		    <label class="form-check-label" for="exampleCheck1">Check me out</label>
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>


## Step 4. 
for error / showing error at the Admin Login page go to login.blade.php

	    @if ($errors -> any())
	        @foreach ($errors->all() as $error)
	            <li>{{$error }}</li>
	        @endforeach
	    @endif        
	
	    @if (Session::has('error'))
	        <li>{{ Session::get('error')}}</li>
	    @endif  	    
     	    @if (Session::has('success'))
	        <li>{{ Session::get('success')}}</li>
	    @endif  

## Step 5.
now in the from name establish the 	<br/>
	1. route('admin.login_submit') in the <from action="route"> <br/>
	2. in the start of the from between <from></form> wirte @csrf <br/>
 <br/>
More Details about @csrf 
Laravel (PHP Framework)
In Laravel, @csrf is a Blade template directive used to include a CSRF token in an HTML form.
	
### Example:
 
	<form method="POST" action="/submit-form">
    		@csrf
    		<input type="text" name="data" />
    		<button type="submit">Submit</button>
	</form>
This ensures the CSRF token is added as a hidden input field:

	<input type="hidden" name="_token" value="your_csrf_token_here">
     
	

