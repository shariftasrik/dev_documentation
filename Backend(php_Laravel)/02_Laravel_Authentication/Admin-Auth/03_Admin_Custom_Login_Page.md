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
