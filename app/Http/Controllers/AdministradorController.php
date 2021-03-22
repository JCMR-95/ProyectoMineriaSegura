<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

class AdministradorController extends Controller
{

    public function primerAdministrador(){
        $nombre = "Administrador";
        $correo = "admin@valorice.cl";
        $contrasena = "adminvalorice";

        $adminIngresado = DB::select('select email from users where email = :correo', ['correo' => $correo]);

        if($adminIngresado != null){

            return back()->with('success','Administrador ingresado.');
            
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

        return back()->with('success','Administrador ingresado.');
    }


    public function mostrarInteresados(){

        $interesados = DB::table('tabla_interesados')->where('estado', null)->get();
        return response()->json($interesados);
    }

    public function detallesInteresado($id){

        $consulta = DB::select('select consulta from tabla_interesados where id = :id', ['id' => $id]);
        $consulta = $consulta[0]->consulta;
        return view('detallesInteresado',compact('consulta'));
    }

    public function eliminarInteresado($id){

        $this->validarAdministrador();
        DB::table('tabla_interesados')->delete($id);
        return back()->with('success','Interesado eliminado.');
    }

    public function atenderInteresado($id){

        $this->validarAdministrador();
        $interesado = DB::table('tabla_interesados')->where('id', $id)->update(['estado' => 'Atendido']);
        return back()->with('success','Interesado atendido.');
    }

    public function mostrarInteresadosAtendidos(){

        $interesados = DB::table('tabla_interesados')->where('estado', 'Atendido')->get();
        return response()->json($interesados);
    }

    public function guardarEstudiante(Request $request){

        $this->validarAdministrador();
        if($request->nombreEstudiante == null || $request->correoEstudiante == null || $request->contrasenaEstudiante == null){

            return back()->with('error','Debe rellenar todos los campos.');
        }

        $nombre = $request->nombreEstudiante;
        $correo = $request->correoEstudiante;
        $contrasena = $request->contrasenaEstudiante;

        $contrasena = password_hash($contrasena, PASSWORD_DEFAULT);

        DB::table('users')->insert([
            'name' => $nombre,
            'email' => $correo,
            'password' => $contrasena
        ]);

        DB::table('tabla_estudiantes')->insert([
            'correo' => $correo
        ]);

        return back()->with('success','Estudiante ingresado.');
    }

    public function validarAdministrador(){

        if(Auth::user()->email != "admin@valorice.cl"){
            dd("Permiso denegado.");
        }
    }
}