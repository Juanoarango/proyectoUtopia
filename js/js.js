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

// Función para conocer que Radio fué seleccionado - Ganas Dinero
$(document).ready(function () {
    $("#btnEnviar").on('click', function () {
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
function puntajeDiagnostico()
{
    const pagWeb = document.getElementById('tienesWebResultado').value;
    const redesSociales = document.getElementById('redesSocialesResultado').value;
    const community = document.getElementById('communityResultado').value;
    const posicionamiento = document.getElementById('posicionamientoResultado').value;
    const ganasDinero = document.getElementById('ganasDineroResultado').value;
    const estadistica = document.getElementById('estadisticaResultado').value;

    const pagWebPuntos = 0;
    const redesSocialesPuntos = 0;
    const communityPuntos = 0;
    const posicionamientoPuntos = 0;
    const ganasDineroPuntos = 0;
    const estadisticaPuntos = 0;
    const totalPuntos = 0;

    if(pagWeb == SI) {pagWebPuntos == 20}

    if(redesSociales == 1) {redesSocialesPuntos = 2}
    if(redesSociales == 2) {redesSocialesPuntos = 4}
    if(redesSociales == 3) {redesSocialesPuntos = 6}
    if(redesSociales == 4) {redesSocialesPuntos = 8}
    if(redesSociales == 5) {redesSocialesPuntos = 10}
    
    if(community == SI) {communityPuntos = 20}

    if(posicionamiento == SI) {posicionamientoPuntos = 10}

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
    if(totalPuntos > 0; totalPuntos <= 20) {document.resultadoDiagnositco.tuAvengers.value = "Spiderman"}
    if(totalPuntos > 21; totalPuntos <= 40) {document.resultadoDiagnositco.tuAvengers.value = "Hulk"}
    if(totalPuntos > 41; totalPuntos <= 60) {document.resultadoDiagnositco.tuAvengers.value = "Dr. Strange"}
    if(totalPuntos > 61; totalPuntos <= 80) {document.resultadoDiagnositco.tuAvengers.value = "Thor"}
    if(totalPuntos > 81; totalPuntos <= 100) {document.resultadoDiagnositco.tuAvengers.value = "Captain America"}
    
}