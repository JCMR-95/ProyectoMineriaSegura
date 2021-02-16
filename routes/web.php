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
    return view('paginaPrincipal');
})->name('inicio');

Route::get('/nosotros', function () {
    return view('nosotros');
})->name('nosotros');

Route::get('contacto', function () {
    return view('contacto');
})->name('contacto');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('guardarInteresado', [App\Http\Controllers\PrincipalController::class, 'guardarInteresado']);

Auth::routes();

//Iniciar Administrador--------------------------------------------------------------------------------------------

Route::get('/IniciarAdministrador', function () {
    return view('iniciarAdministrador');
})->name('iniciarAdministrador');

Route::post('primerAdministrador', [App\Http\Controllers\AdministradorController::class, 'primerAdministrador']);

Route::group(['middleware' => 'auth'], function(){

    //Estudiante---------------------------------------------------------------------------------------------------



    //Administrador------------------------------------------------------------------------------------------------
    
    Route::get('/menuAdministrador', function () {
        return view('menuAdministrador');
    })->name('menuAdministrador');

    Route::get('/listaInteresados', function () {
        return view('listaInteresados');
    })->name('listaInteresados');
});

