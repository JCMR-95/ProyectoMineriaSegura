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

//Página Principal-------------------------------------------------------------------------------------------------

Route::get('/', function () {
    return view('PaginaPrincipal');
})->name('inicio');

Route::get('/Nosotros', function () {
    return view('Nosotros');
})->name('nosotros');

Route::get('/Contacto', function () {
    return view('Contacto');
})->name('contacto');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

//Iniciar Administrador--------------------------------------------------------------------------------------------

Route::get('/IniciarAdministrador', function () {
    return view('iniciarAdministrador');
})->name('iniciarAdministrador');

Route::post('primerAdministrador', [App\Http\Controllers\AdministradorController::class, 'primerAdministrador']);

Route::group(['middleware' => 'auth'], function(){

    //Estudiante---------------------------------------------------------------------------------------------------



    //Administrador------------------------------------------------------------------------------------------------
    

    Route::get('/MenuAdministrador', function () {
        return view('menuAdministrador');
    })->name('menuAdministrador');
});

