// Función para enviar el resultado del diagnóstico 

function enviarDiagnostico()
{
    const nitEmpresa =  document.getElementById('nitEmpresa').value;
    const nameEmpresa = document.getElementById('nameEmpresa').value;    
    const nameContacto = document.getElementById('nameContacto').value;
    const numeroCelular = document.getElementById('numeroCelular').value;
    const emailEmpresa = document.getElementById('emailEmpresa').value;

    document.frmResultadoDiagnostico.nitEmpresaResultado.value = nitEmpresa;
    document.frmResultadoDiagnostico.nameEmpresaResultado.value = nameEmpresa;
    document.frmResultadoDiagnostico.nameContactoResultado.value = nameContacto;
    document.frmResultadoDiagnostico.numeroCelularResultado.value = numeroCelular;
    document.frmResultadoDiagnostico.emailEmpresaResultado.value = emailEmpresa;   
}

// Funciónes para conocer que Radio fué seleccionado
// Tienes WEB?

$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="web"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoWeb = $(this).val();
                document.frmResultadoDiagnostico.tienesWebResultado.value = resultadoWeb;
            }
        })
    })
});
// Redes Sociales
// ***** ojo pendiente contador de las redes checked ******
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="tusRedesSociales"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoRedes = $(this).val();
                document.frmResultadoDiagnostico.redesSocialesResultado.value = resultadoRedes;
            }
        })
    })
});
// Tienes Community
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="community"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoCommunity = $(this).val();
                document.frmResultadoDiagnostico.communityResultado.value = resultadoCommunity;
            }
        })
    })
});
// Posicionador
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="usasPosicionador"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoPosicionador = $(this).val();
                document.frmResultadoDiagnostico.posicionamientoResultado.value = resultadoPosicionador;
            }
        })
    })
});
// Ganas Dinero
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="ganasDinero"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoGanadinero = $(this).val();
                document.frmResultadoDiagnostico.ganasDineroResultado.value = resultadoGanadinero;
            }
        })
    })
});
// Estadísticas
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="tienesEstadisticas"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                //console.log('El radio seleccionado es: ' + $(this).val());
                resultadoEstadisticas = $(this).val();
                document.frmResultadoDiagnostico.tienesEstadisticasResultado.value = resultadoEstadisticas;
            }
        })
    })
});
//$('#miCampo').val('mi valor');

function puntajeDiagnostico()
{
    const pagWeb = document.getElementById('tienesWebResultado').value;
    const redesSociales = document.getElementById('redesSocialesResultado').value;
    const community = document.getElementById('communityResultado').value;
    const posicionamiento = document.getElementById('posicionamientoResultado').value;
    const ganasDinero = document.getElementById('ganasDineroResultado').value;
    const estadistica = document.getElementById('tienesEstadisticasResultado').value;

    let pagWebPuntos = 0;
    let redesSocialesPuntos = 0;
    let communityPuntos = 0;
    let posicionamientoPuntos = 0;
    let ganasDineroPuntos = 0;
    let estadisticaPuntos = 0;
    var totalPuntos = 0;    

    if(pagWeb == "SI") {pagWebPuntos = 20; totalPuntos = totalPuntos + 20}

    if(redesSociales == 1) {redesSocialesPuntos = 2; totalPuntos = totalPuntos + 2}
    if(redesSociales == 2) {redesSocialesPuntos = 4; totalPuntos = totalPuntos + 4}
    if(redesSociales == 3) {redesSocialesPuntos = 6; totalPuntos = totalPuntos + 6}
    if(redesSociales == 4) {redesSocialesPuntos = 8; totalPuntos = totalPuntos + 8}
    if(redesSociales == 5) {redesSocialesPuntos = 10; totalPuntos = totalPuntos + 10}
    
    if(community == "SI") {communityPuntos = 20; totalPuntos = totalPuntos + 20}

    if(posicionamiento == "SI") {posicionamientoPuntos = 10; totalPuntos = totalPuntos + 10}

    if(ganasDinero == 1) {ganasDineroPuntos = 3; totalPuntos = totalPuntos + 3}
    if(ganasDinero == 2) {ganasDineroPuntos = 6; totalPuntos = totalPuntos + 6}
    if(ganasDinero == 3) {ganasDineroPuntos = 9; totalPuntos = totalPuntos + 9}
    if(ganasDinero == 4) {ganasDineroPuntos = 12; totalPuntos = totalPuntos + 12}
    if(ganasDinero == 5) {ganasDineroPuntos = 15; totalPuntos = totalPuntos + 15}

    if(estadistica == 1) {estadisticaPuntos = 5; totalPuntos = totalPuntos + 5}
    if(estadistica == 2) {estadisticaPuntos = 10; totalPuntos = totalPuntos + 10}
    if(estadistica == 3) {estadisticaPuntos = 15; totalPuntos = totalPuntos + 15}
    if(estadistica == 4) {estadisticaPuntos = 20; totalPuntos = totalPuntos + 20}
    if(estadistica == 5) {estadisticaPuntos = 25; totalPuntos = totalPuntos + 25}

    totalPuntos = pagWebPuntos + redesSocialesPuntos + communityPuntos + posicionamientoPuntos + ganasDineroPuntos + estadisticaPuntos;
    console.log(totalPuntos);
        
    document.frmResultadoDiagnostico.resultadoDiagnostico.value = totalPuntos;

//    return totalPuntos.value;
//}
//function eligeAvengers (totalPuntos)
//{
    if(totalPuntos > 0 && totalPuntos <= 20) {document.frmResultadoDiagnostico.tuAvengers.value = "Spiderman"}
    if(totalPuntos > 21 && totalPuntos <= 40) {document.frmResultadoDiagnostico.tuAvengers.value = "Hulk"}
    if(totalPuntos > 41 && totalPuntos <= 60) {document.frmResultadoDiagnostico.tuAvengers.value = "Dr. Strange"}
    if(totalPuntos > 61 && totalPuntos <= 80) {document.frmResultadoDiagnostico.tuAvengers.value = "Thor"}
    if(totalPuntos > 81 && totalPuntos <= 100) {document.frmResultadoDiagnostico.tuAvengers.value = "Captain America"}
    
    console.log(tuAvengers);
}


// API
// Public Key 	199ff19dd15acb9ab9183ef75ab5808c3
// Private Key 	9b9c695a749380d31b96177a8c81f01f880e564b
// Concatenar para Hash 99b9c695a749380d31b96177a8c81f01f880e564b99ff19dd15acb9ab9183ef75ab5808c3
// Hash con 1: 795AC35E3288EC4B0280B1D0B154FF09
// Hash con 9: BB0B841A12249E09FEBCFEE87397E938
// hash con publica: F48EFF5056C9162C1AD184639EE65F9E
// hash con 1, pubica, privada: BE4F1C4A1977858553A7CB2341092696


//99ff19dd15acb9ab9183ef75ab5808c3
//9b9c695a749380d31b96177a8c81f01f880e564b

//http://gateway.marvel.com/v1/public/characters?apikey=c820e1a0&ts=9&hash=fdde64d1cb96ffad1ae414e0af18b1f0&name=iron man

var avengers = ""
avengers = document.getElementById('tuAvengers').value;

$.ajax({
   // const ts = Date.now(),
    
   //url: `https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d807331cdbf39818935beaaf61d8ebe9&hash=${hash}`,
    //url: 'https://gateway.marvel.com:443/v1/public/characters?f19dd15acb9apikey=99fab9183ef75ab5808c3&ts=9&hash=BB0B841A12249E09FEBCFEE87397E938&orderBy=name',
    //url: 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=99ff19dd15acb9ab9183ef75ab5808c3',
    
    method:'GET',

    beforeSend: function(request) {
        request.setRequestHeader("Origin", 'https://localhost');
    },
    url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=99ff19dd15acb9ab9183ef75ab5808c3&hash=BE4F1C4A1977858553A7CB2341092696',

    
}).done(function(respuesta){
    console.log(respuesta);
});

// Video API Marvel
/*
const marvel
{
    render:() =>
    {
        const urlAPI '';
        const container document.querySelector(#marvel-row);
        let contentHTML "";
        

    }
}
*/



/*
$.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=72bbed3a19c397fb81602b0065e8684c',
    method:'GET'
}).done(function(respuesta){
    console.log(respuesta);
});
*/
