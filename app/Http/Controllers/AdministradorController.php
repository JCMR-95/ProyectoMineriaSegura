<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AdministradorController extends Controller
{

    public function primerAdministrador(){
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


    public function mostrarInteresados(){

        $interesados = DB::table('tabla_interesados')->get();
        return response()->json($interesados);
    }

    public function detallesInteresado($id){

        $consulta = DB::select('select consulta from tabla_interesados where id = :id', ['id' => $id]);
        $consulta = $consulta[0]->consulta;
        return view('detallesInteresado',compact('consulta'));
    }

    public function eliminarInteresado($id){

        DB::table('tabla_interesados')->delete($id);
        return view('listaInteresados');
    }
}