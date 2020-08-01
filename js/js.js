class clsDiagnosticoEmpresa
{
 constructor(nitEmpresa, nameEmpresa)
     {
        this.nitEmpresa = nitEmpresa;
        this.nameEmpresa = nameEmpresa;
     }
 
}
class mostrarCliente
{
    addCliente()
    {

    }
}
document.getElementById('diagnostico')
    .addEventListener('submit', function()
{
    console.log(document.getElementById('nitEmpresa').Value);
    console.log(document.getElementById('nameEmpresa').Value);
})