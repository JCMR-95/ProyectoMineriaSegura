<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PrincipalController extends Controller
{

    public function guardarInteresado(Request $request)
    {

        if($request->nombreInteresado == null || $request->correoInteresado == null || $request->telefonoInteresado == null || $request->consultaInteresado == null){

            return back()->with('error','Debe completar todos los campos.');
            
        }else{

            DB::table('tabla_interesados')->insert([
                'nombre' => $request->nombreInteresado,
                'correo' => $request->correoInteresado,
                'telefono' => $request->telefonoInteresado,
                'consulta' => $request->consultaInteresado
            ]);
        }

        return back()->with('success','Consulta enviada con éxito.');
    }
}