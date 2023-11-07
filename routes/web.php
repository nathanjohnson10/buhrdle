<?php

use App\Models\Answer;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/test', function () {
    return view('hometest', [
        'answer' => Answer::select('SELECT * from answers where date = CURDATE()')->get(),
        'players' => DB::table('players')->get(),
        'guesses' => DB::select('SELECT * FROM guesses')
    ]);
});

Route::get('/rankings', function (){
    $csv = array_map('str_getcsv', file(resource_path() . '/views/combinedrankings.csv')); 
    array_walk($csv, function(&$row) use ($csv) {
        $row = array_combine($csv[0], $row);
    });
    
    array_shift($csv); 
    $json = json_encode($csv);

    return $json;
});