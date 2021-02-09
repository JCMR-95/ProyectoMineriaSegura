<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Página Principal

Route::get('/', function () {
    return view('PaginaPrincipal');
})->name('inicio');

Route::get('/Nosotros', function () {
    return view('Nosotros');
})->name('nosotros');

Route::get('/Contacto', function () {
    return view('Contacto');
})->name('contacto');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function(){

    //Estudiante



    //Administrador

    Route::get('/MenuAdministrador', function () {
        return view('menuAdministrador');
    })->name('menuAdministrador');
});

