/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Menú Principal
require('./components/Presentacion');
require('./components/ListaCursos');
require('./components/Consultas');
require('./components/Auspiciadores');
require('./components/Nosotros');
require('./components/Contacto');

//Estudiante

require('./components/MenuEstudiante');


//Administrador

require('./components/MenuAdministrador');
require('./components/ListaInteresados');
require('./components/DetallesInteresado');
require('./components/BotonVolverMenuAdmin');
require('./components/BotonVolverListaInteresados');



