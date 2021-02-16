<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PrincipalController extends Controller
{

    public function guardarInteresado(Request $request)
    {

        if($request->nombreInteresado == null || $request->correoInteresado == null || $request->telefonoInteresado == null || $request->consultaInteresado == null){

            return "Consulta Inválida";
            
        }else{

            DB::table('tabla_interesados')->insert([
                'nombre' => $request->nombreInteresado,
                'correo' => $request->correoInteresado,
                'telefono' => $request->telefonoInteresado,
                'consulta' => $request->consultaInteresado
            ]);
        }

        return "Listo";
    }
}