# Custom Login Page

## Creating Admin Controller
1. Creating a new controller for Admin

	    php artisan make:controller AdminController

2. Go to Admin.php under Models and create a new guard before the previous guard into it

	    protected $guard = 'admin';

3. Go to auth.php which is under config folder <br/>
and in the auth.php Laravel is using guard as web-guard by default and providers

4. we have to update this guard for Admin (under 'web' guard from 'guards')

        'guards' => [
            'web' => [
                'driver' => 'session',
                'provider' => 'users',
            ],
            'admin' => [
                'driver' => 'session',
                'provider' => 'admins',
            ],
        ],

5. we have to update the provider also for Admin (under 'user' provider)

        'providers' => [
            'users' => [
                'driver' => 'eloquent',
                'model' => env('AUTH_MODEL', App\Models\User::class),
            ],
            'admins' => [
                'driver' => 'eloquent',
                'model' => env('AUTH_MODEL', App\Models\Admin::class),
            ],
        ],


## Creating Routes

1. open web.php which in under routes folder

2. import AdminController.php

		use App\Http\Controllers\AdminController;

3. after this

		require __DIR__.'/auth.php';
Make a new route

	Route::get('/admin/login', [AdminController::class, 'AdminLogin'])->name('admin.login');


4. now open AdminController.php
<br/>
create a new method under AdminController Class

		class AdminController extends Controller
		{
		    public function AdminLogin(){
		        return view('admin.login');
		    }
		
		    // End Method
		}


5. Into the view folder create a new folder named  "admin" and under the admin folder create a new file called `login.blade.php`

in login.blade.php write this html code

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Admin Login Page</title>
	</head>
	<body>
	    <h1>Admin Login</h1>
	</body>
	</html>

6. before check the preview we have to delete the cache memory

		php artisan optimize

7. check preview

		http://127.0.0.1:8000/admin/login

8. Go to web.php again and write a new route before admin/login route

		Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');

9. go to AdminController and write a new method into the AdminController Class

		public function AdminDashboard(){
		        return view('admin.admin_dashboard');
		    }
		    // End Method



10. now create a new file into the admin folder which is under views folder and write a html code for admin_dashboard


		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Admin Dashboard Page</title>
		</head>
		<body>
		    <h1>Admin Dashboard</h1>
		</body>
		</html>


11. before check the preview we have to delete the cache memory

		php artisan optimize

12. check preview

		http://127.0.0.1:8000/admin/dashboard





