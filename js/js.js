// Función para enviar el resultado del diagnóstico 

function enviarDiagnostico()
{
    const nitEmpresa =  document.getElementById('nitEmpresa').value;
    const nameEmpresa = document.getElementById('nameEmpresa').value;    
    const nameContacto = document.getElementById('nameContacto').value;
    const numeroCelular = document.getElementById('numeroCelular').value;
    const emailEmpresa = document.getElementById('emailEmpresa').value;

    document.resultadoDiagnositco.nitEmpresaResultado.value = nitEmpresa;
    document.resultadoDiagnositco.nameEmpresaResultado.value = nameEmpresa;
    document.resultadoDiagnositco.nameContactoResultado.value = nameContacto;
    document.resultadoDiagnositco.numeroCelularResultado.value = numeroCelular;
    document.resultadoDiagnositco.emailEmpresaResultado.value = emailEmpresa;   
}

// Funciónes para conocer que Radio fué seleccionado
// Tienes WEB?

$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="web"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoWeb = $(this).val();
                document.resultadoDiagnositco.tienesWebResultado.value = resultadoWeb;
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
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoRedes = $(this).val();
                document.resultadoDiagnositco.redesSocialesResultado.value = resultadoRedes;
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
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoCommunity = $(this).val();
                document.resultadoDiagnositco.communityResultado.value = resultadoCommunity;
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
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoPosicionador = $(this).val();
                document.resultadoDiagnositco.posicionamientoResultado.value = resultadoPosicionador;
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
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoGanadinero = $(this).val();
                document.resultadoDiagnositco.ganasDineroResultado.value = resultadoGanadinero;
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
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoEstadisticas = $(this).val();
                document.resultadoDiagnositco.tienesEstadisticasResultado.value = resultadoEstadisticas;
            }
        })
    })
});

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
    let totalPuntos = 0;

    if(pagWeb == "SI") {pagWebPuntos == 20}

    if(redesSociales == 1) {redesSocialesPuntos = 2}
    if(redesSociales == 2) {redesSocialesPuntos = 4}
    if(redesSociales == 3) {redesSocialesPuntos = 6}
    if(redesSociales == 4) {redesSocialesPuntos = 8}
    if(redesSociales == 5) {redesSocialesPuntos = 10}
    
    if(community == "SI") {communityPuntos = 20}

    if(posicionamiento == "SI") {posicionamientoPuntos = 10}

    if(ganasDinero == 1) {ganasDineroPuntos = 3}
    if(ganasDinero == 2) {ganasDineroPuntos = 6}
    if(ganasDinero == 3) {ganasDineroPuntos = 9}
    if(ganasDinero == 4) {ganasDineroPuntos = 12}
    if(ganasDinero == 5) {ganasDineroPuntos = 15}

    if(estadistica == 1) {estadisticaPuntos = 5}
    if(estadistica == 2) {estadisticaPuntos = 10}
    if(estadistica == 3) {estadisticaPuntos = 15}
    if(estadistica == 4) {estadisticaPuntos = 20}
    if(estadistica == 5) {estadisticaPuntos = 25}

    totalPuntos = pagWebPuntos + redesSocialesPuntos + communityPuntos + posicionamientoPuntos + ganasDineroPuntos + estadisticaPuntos;
    document.resultadoDiagnositco.resultadoDiagnostico.value = totalPuntos;

    return totalPuntos;
}
function eligeAvengers (totalPuntos)
{
    if(totalPuntos > 0 && totalPuntos <= 20) {document.resultadoDiagnositco.tuAvengers.value = "Spiderman"}
    if(totalPuntos > 21 && totalPuntos <= 40) {document.resultadoDiagnositco.tuAvengers.value = "Hulk"}
    if(totalPuntos > 41 && totalPuntos <= 60) {document.resultadoDiagnositco.tuAvengers.value = "Dr. Strange"}
    if(totalPuntos > 61 && totalPuntos <= 80) {document.resultadoDiagnositco.tuAvengers.value = "Thor"}
    if(totalPuntos > 81 && totalPuntos <= 100) {document.resultadoDiagnositco.tuAvengers.value = "Captain America"}
    
}
// API
// Public Key 	99ff19dd15acb9ab9183ef75ab5808c3
// Private Key 	9b9c695a749380d31b96177a8c81f01f880e564b
var avengers = ""
avengers = document.getElementById('tuAvengers').value;

$.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&avengers.value&apikey=9b9c695a749380d31b96177a8c81f01f880e564b',
    method:'GET'
}).done(function(respuesta){
    console.log(respuesta);
});

//btnMostrarAvenger
/*
$(document).ready(function () {
    $("#btnEnviarDiagnostico").on('click', function () {
        var $radios = $('input[name="tienesEstadisticas"]'); 
        $radios.each(function () {
            if ($(this).prop('checked')) {
                console.log('El radio seleccionado es: ' + $(this).val());
                resultadoEstadisticas = $(this).val();
                document.resultadoDiagnositco.tienesEstadisticasResultado.value = resultadoEstadisticas;
            }
        })
    })
});
*/

/*
$.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=72bbed3a19c397fb81602b0065e8684c',
    method:'GET'
}).done(function(respuesta){
    console.log(respuesta);
});
*/
