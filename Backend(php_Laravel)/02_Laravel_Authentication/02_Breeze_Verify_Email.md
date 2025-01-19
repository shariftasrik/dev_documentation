## Step 1:

1. Go to mailtrap.io
2. Email Testing => Inboxes => My Inbox
3. Code Samples => click on PHP => select PHP: Laravel 9+
4. Then copy the code

## Step 2:

1. Open phpMyAdmin
2. Open VS Code and Go to .env file
3. Change the mail parts from .env file to

        MAIL_MAILER=smtp
        MAIL_HOST=sandbox.smtp.mailtrap.io
        MAIL_PORT=2525
        MAIL_USERNAME=aaaaaaaaaaaaaa
        MAIL_PASSWORD=xxxxxxxxxxxxxx

## Step 3:

Step 3:
1.Go to app => Models => User.php
2. Remove comment from 
	// use Illuminate\Contracts\Auth\MustVerifyEmail;
 3. Code (User.php) will be like this :
 
        <?php
        
        namespace App\Models;
        
        use Illuminate\Contracts\Auth\MustVerifyEmail;
        use Illuminate\Database\Eloquent\Factories\HasFactory;
        use Illuminate\Foundation\Auth\User as Authenticatable;
        use Illuminate\Notifications\Notifiable;
        
        class User extends Authenticatable implements MustVerifyEmail
        {
            /** @use HasFactory<\Database\Factories\UserFactory> */
            use HasFactory, Notifiable;
        
            /**
             * The attributes that are mass assignable.
             *
             * @var list<string>
             */
            protected $guarded = [];
        
            /**
             * The attributes that should be hidden for serialization.
             *
             * @var list<string>
             */
            protected $hidden = [
                'password',
                'remember_token',
            ];
        
            /**
             * Get the attributes that should be cast.
             *
             * @return array<string, string>
             */
            protected function casts(): array
            {
                return [
                    'email_verified_at' => 'datetime',
                    'password' => 'hashed',
                ];
            }
        }


### NOTE :
1. class User extends Authenticatable implements MustVerifyEmail (MustVerifyEmail for verifying mail)
2. To make selected Entity fillable

        protected $fillable = [
                'name',
                'email',
                'password',
            ];
 
 
3. To make every entity fillable
   
           protected $guarded = [];
   

