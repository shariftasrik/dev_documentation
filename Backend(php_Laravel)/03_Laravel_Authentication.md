## Step 1 : Authentication using *Laravel Breeze*

1. Go to *Breeze* which is in *Packages* in Laravel 11 page

   		https://laravel.com/docs/11.x/starter-kits#laravel-breeze
2. Copy and Paste it into a new *cmd* at VS Code *Terminal* of the project and Press *Enter*

         composer require laravel/breeze --dev
3. Install the breeze

         php artisan breeze:install
4. Then type "*blade*" after > symbol

           Which Breeze stack would you like to install?
           Blade with Alpine ................................................................................................... blade
           Livewire (Volt Class API) with Alpine ............................................................................ livewire
           Livewire (Volt Functional API) with Alpine ............................................................ livewire-functional
           React with Inertia .................................................................................................. react
           Vue with Inertia ...................................................................................................... vue
           API only .............................................................................................................. api
         ❯
5. Then type "*no*"

           Would you like dark mode support? (yes/no) [no]
           ❯
6. Then type *1*

             Which testing framework do you prefer? [Pest]
             Pest .................................................................................................................... 0
             PHPUnit ................................................................................................................. 1
             ❯ 
7. Then migrate the default databases at our phpMyAdmin using this command
   
            php artisan migrate


npm install
npm run dev
