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
function validaWeb()
{
    const webSiNo = document.getElementById('web');
    const resultadoWebSiNo = "";
    const i = 0;

    for(i = 0; i < webSiNo.length; i++)
    {
        if(webSiNo[i].checked)
        {
            resultadoWebSiNo = webSiNo[i].value;
            let noTieneWeb = "No Tienes Página WEB";
            document.diagnostico.nameWeb.value = noTieneWeb;
        }
    }
}
function valdiaGanadinero()
{
    var ganaDinero = document.getElementById('ganaDinero');
    const resultadoGanadinero = "";
    const i = 0;

    for(i = 0; i < ganaDinero.length; i++)
    {
        if(ganaDinero[i].checked)
        {
            resultadoGanadinero = ganaDinero(i).value;            
        }
    }
    document.resultadoDiagnositco.ganasDineroResultado.value = resultadoGanadinero;
}
 
    
 /*  
    var rates = document.getElementsByName('rate');
    var rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }



    function getRadioButtonSelectedValue(ctrl)
    {
        for(i=0;i<ctrl.length;i++)
            if(ctrl[i].checked) return ctrl[i].value;
    }
  
  getRadioButtonSelectedValue(document.frmSO.so);.
  */    
    
    /*
    if (ingresoTotal > gastoTotal) {
        console.log("Todavía Tiene Dinero");
    } else{
        console.log("Se Gastó Hasta lo que NO Tenía")
    }
    */






