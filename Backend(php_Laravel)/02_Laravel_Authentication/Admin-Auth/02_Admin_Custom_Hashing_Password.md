1. After creating migration and model
2. Go to Admin.php which is under Models under app
3.

      <?php
      
      namespace App\Models;
      
      
      use Illuminate\Database\Eloquent\Factories\HasFactory;
      use Illuminate\Foundation\Auth\User as Authenticatable;
      use Illuminate\Notifications\Notifiable;
      
      
      class Admin extends Authenticatable 
      {
      
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


4.

        php artisan migrate 
to get the admin migrations in phpMyAdmin

5. Go to phpMyAdmin and after refreshing you will get a new table named `admins`

6. click onto it and show the table attributes

7. now if we want to insert some demo data into it, we have to use `seed` for Laravel.

8. to create a seed

            php artisan make:seeder AdminSeeder

8. we will get this AdminSeeder.php file into seeders folder of our database folder

10. into this `AdminSeeder.php` file, we will use this code to enter demo data at the admins table

            <?php
            
            namespace Database\Seeders;
            
            use Illuminate\Database\Console\Seeds\WithoutModelEvents;
            use Illuminate\Database\Seeder;
            use App\Models\Admin;
            use Illuminate\Support\Facades\Hash;
            
            class AdminSeeder extends Seeder
            {
                /**
                 * Run the database seeds.
                 */
                public function run(): void
                {
                    $obj = new Admin();
                    $obj->name = 'Admin';
                    $obj->email = 'admin@gmail.com';
                    $obj->password = Hash::make('abc123');
                    $obj->save();
            
                }
            }


11. Then we have to go to the DatabaseSeeder.php file , and into this DatabaseSeeder.php file we have to call the seeder that we have created

             $this->call([AdminSeeder::class]);

write this code at the beginning of the `public function run(): void {}` method


13. use this code in the terminal to seed the updates in the database

             php artisan db:seed


14. go to the database check that every inserted demo data has come into it
