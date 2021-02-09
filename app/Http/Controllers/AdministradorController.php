<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AdministradorController extends Controller
{

    public function primerAdministrador()
    {
        $nombre = "Administrador";
        $correo = "admin@valorice.cl";
        $contrasena = "adminvalorice";

        $adminIngresado = DB::select('select email from users where email = :correo', ['correo' => $correo]);

        if($adminIngresado != null){

            return view('PaginaPrincipal');
            
        }else{

            $contrasena = password_hash($contrasena, PASSWORD_DEFAULT);

            DB::table('users')->insert([
                'name' => $nombre,
                'email' => $correo,
                'password' => $contrasena
            ]);

            DB::table('tabla_administradores')->insert([
                'correo' => $correo
            ]);
        }

        return view('PaginaPrincipal');
    }
}