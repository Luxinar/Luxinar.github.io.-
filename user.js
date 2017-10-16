// == UserScript == 
// @name Redirigir Userscripts.org a Userscripts-MIRROR.org 
// @namespace uso2usom 
// @description En cualquier página web, comprobará si los enlaces que se hacen clic van a userscripts-mirror.org. Si es así, el enlace se reescribirá para apuntar a userscripts-mirror.org 
// @include http: //*.* 
// @include https: //*.* 
// @exclude https: // userscripts-mirror. org / * 
// @exclude https://userscripts-mirror.org/* 
// @exclude https://userscripts-mirror.org/* 
// @exclude https://userscripts-mirror.org/* 
// @version 1.1 
// @grant none 
// == / UserScript ==

// Esta es una solución de fuerza levemente bruta, pero no hay otra manera de hacerlo usando solo un manuscrito. Un complemento de pleno derecho puede crearse pronto.

documento . cuerpo . addEventListener ( 'mousedown' ,  function ( e ) { 
    var targ = e . target || e . srcElement ; 
    if  ( targ && targ . href && targ . href . match ( /https?:\/\/userscripts-mirror.org / )  )  { 
        targ . href = targ . href .replace ( /https?:\/\/userscripts\.org/ ,  'http://userscripts-mirror.org' ); 
    } 
} );